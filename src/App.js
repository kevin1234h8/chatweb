import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import axios from "axios";
import { ConversationsContext } from "./utils/ConversationsContext";
import { io } from "socket.io-client";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("User")
      ? JSON.parse(localStorage.getItem("User"))
      : null
  );
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [file, setFile] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState(null);

  const socket = useRef();

  useEffect(() => {
    if (
      arrivalMessage &&
      currentChat.members?.includes(arrivalMessage.sender)
    ) {
      setMessages((previousMessage) => [...previousMessage, arrivalMessage]);
    }
  }, [arrivalMessage]);

  useEffect(() => {
    socket.current = io("http://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", user?._id);
    socket.current.on("getUsers", (data) => setOnlineUsers(data));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      const res = await axios.get(
        `https://chatwebserver.vercel.app/conversations/${user?._id}`,
        {
          withCredentials: true,
        }
      );
      setConversations(res.data);
    };
    getConversations();
  }, [user?._id]);

  //*message

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `https://chatwebserver.vercel.app/messages/${currentChat?._id}`,
          { withCredentials: true }
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    if (newMessage !== "") {
      const res = await axios.post(
        "https://chatwebserver.vercel.app/messages/create",
        message,
        { withCredentials: true }
      );

      setMessages([...messages, res.data]);
      setNewMessage("");
    }
  };

  return (
    <ConversationsContext.Provider value={conversations}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                currentUserId={user?._id}
                messages={messages}
                setCurrentChat={setCurrentChat}
                currentChat={currentChat}
                setNewMessage={setNewMessage}
                handleSendMessage={handleSendMessage}
                newMessage={newMessage}
                onlineUsers={onlineUsers}
                setConversations={setConversations}
              />
            }
          />

          <Route
            path="/login"
            element={
              <Login
                loginUsername={loginUsername}
                loginPassword={loginPassword}
                setLoginUsername={setLoginUsername}
                setLoginPassword={setLoginPassword}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/signup"
            element={
              user ? (
                <Navigate to={"/login"} />
              ) : (
                <Signup
                  setUsername={setUsername}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  username={username}
                  email={email}
                  password={password}
                  setFile={setFile}
                  file={file}
                />
              )
            }
          />
        </Routes>
      </Router>
    </ConversationsContext.Provider>
  );
}

export default App;
