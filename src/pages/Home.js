import React, { useState } from "react";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Center from "../components/page_component/Center";
import Right from "../components/page_component/Right";
import Sidebar from "../components/page_component/Sidebar";
import Drawer from "../components/Drawer";
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
  const [userFriend, setUserFriend] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [open, setOpen] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  console.log(userFriend);
  const handleOpenSidebar = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Navbar
        user={user}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        handleOpenDrawer={handleOpenDrawer}
      />
      <div className="w-full flex min-h-screen">
        <div
          className={`hidden relative p-4 h-full w-24  ${
            open ? "lg:w-1/6 " : "lg:w-24"
          } duration-500 ease-in-out md:block`}
        >
          <div
            onClick={handleOpenSidebar}
            className="absolute right-[-10px] top-44 bg-white rounded-lg "
          >
            {open ? (
              <i className=" hidden far fa-arrow-alt-circle-right text-2xl lg:block"></i>
            ) : (
              <i className="hidden far fa-arrow-alt-circle-left text-2xl lg:block"></i>
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
        <div className=" w-full bg-[#f9f3ee] flex p-4 gap-4 md:w-6/6">
          <div className=" hidden bg-white px-4 md:block md:w-1/3">
            <Center
              currentUserId={currentUserId}
              setCurrentChat={setCurrentChat}
              onlineUsers={onlineUsers}
              online={online}
              userFriend={userFriend}
              setUserFriend={setUserFriend}
              setOpenDrawer={setOpenDrawer}
            />
          </div>
          <div className="w-full  md:block md:w-2/3 md:px-4">
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
      <Drawer
        currentUserId={currentUserId}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setCurrentChat={setCurrentChat}
        onlineUsers={onlineUsers}
        online={online}
        userFriend={userFriend}
        setUserFriend={setUserFriend}
        setOpenDrawer={setOpenDrawer}
        center={<Center />}
        openDrawer={openDrawer}
      />
    </div>
  );
};

export default Home;
