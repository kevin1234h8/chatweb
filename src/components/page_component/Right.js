import React, { useEffect, useRef } from "react";
import Message from "../messages/Message";
import UserSelected from "../user/UserSelected";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Right = ({
  currentChat,
  messages,
  currentUserId,
  setNewMessage,
  handleSendMessage,
  newMessage,
  userFriend,
  setUserFriend,
  user,
}) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <UserSelected
          userFriend={userFriend}
          setUserFriend={setUserFriend}
          currentChat={currentChat}
          currentUserId={currentUserId}
        />
        <div className="overflow-y-auto p-4 flex flex-col gap-8 max-h-[48rem] ">
          {currentChat ? (
            <div className="flex flex-col gap-8">
              {messages.map((message, index) => (
                <div ref={scrollRef} key={index}>
                  <Message
                    key={index}
                    message={message}
                    user={user}
                    currentUserId={currentUserId}
                    currentChat={currentChat}
                    you={message.sender == currentUserId}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center font-bold text-xl">
              Open a conversation to start a chat
            </div>
          )}
        </div>
      </div>
      <div className="sticky bottom-0 md:bottom-10 flex items-center gap-2 justify-between">
        <div className=" bg-white rounded-lg px-4 py-2 flex items-center  w-full lg:gap-4">
          <div className="hidden lg:block">
            <EmojiEmotionsOutlinedIcon />
          </div>
          <input
            type="text"
            placeholder="Write a message..."
            className="w-full outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
                setNewMessage("");
              }
            }}
          />
          <AttachFileOutlinedIcon />
          <button onClick={handleSendMessage}>
            <i className="fa fa-send"></i>
          </button>
        </div>
        <i className="fa-solid fa-phone bg-blue-400 p-2 text-white rounded-full lg:p-3"></i>
      </div>
    </div>
  );
};

export default Right;
