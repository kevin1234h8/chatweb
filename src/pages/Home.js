import React, { useState } from "react";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Center from "../components/page_component/Center";
import Right from "../components/page_component/Right";
import Sidebar from "../components/page_component/Sidebar";

const Home = ({
  currentUserId,
  setCurrentChat,
  currentChat,
  messages,
  setNewMessage,
  handleSendMessage,
  newMessage,
  checkOnlineStatus,
  onlineUsers,
  online,
  user,
}) => {
  const [userFriend, setUserFriend] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [open, setOpen] = useState(true);
  const handleOpenSidebar = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Navbar user={user} />
      <div className="flex min-h-screen">
        <div
          className={`relative p-4 h-full ${
            open ? "w-1/6 " : "w-24"
          } duration-500 ease-in-out `}
        >
          <div
            onClick={handleOpenSidebar}
            className="absolute right-[-10px] top-44 bg-white rounded-lg "
          >
            {open ? (
              <i className="far fa-arrow-alt-circle-right text-2xl"></i>
            ) : (
              <i className="far fa-arrow-alt-circle-left text-2xl"></i>
            )}
          </div>
          <Sidebar
            open={open}
            currentUserId={currentUserId}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            setCurrentChat={setCurrentChat}
            checkOnlineStatus={checkOnlineStatus}
          />
        </div>
        <div className="w-5/6 bg-[#f9f3ee] flex p-4 gap-4 ">
          <div className="w-1/2 bg-white px-4">
            <Center
              currentUserId={currentUserId}
              setCurrentChat={setCurrentChat}
              onlineUsers={onlineUsers}
              online={online}
              userFriend={userFriend}
              setUserFriend={setUserFriend}
            />
          </div>
          <div className="w-1/2 px-4">
            <Right
              currentChat={currentChat}
              messages={messages}
              currentUserId={currentUserId}
              setNewMessage={setNewMessage}
              handleSendMessage={handleSendMessage}
              newMessage={newMessage}
              checkOnlineStatus={checkOnlineStatus}
              userFriend={userFriend}
              setUserFriend={setUserFriend}
            />
          </div>
        </div>
      </div>
      {isOpenModal ? (
        <Modal setIsOpenModal={setIsOpenModal} text={"Add Contact"} />
      ) : null}
    </div>
  );
};

export default Home;
