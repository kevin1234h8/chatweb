import React from "react";
import Center from "./page_component/Center";

const Drawer = ({
  openDrawer,
  setOpenDrawer,
  currentUserId,
  setCurrentChat,
  userFriend,
  setIsOpenModal,
  isOpenModal,
  setUserFriend,
}) => {
  return (
    <div
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (openDrawer
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          "  w-72 right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (openDrawer ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="p-4 relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {
            <Center
              setIsOpenModal={setIsOpenModal}
              isOpenModal={isOpenModal}
              currentUserId={currentUserId}
              setCurrentChat={setCurrentChat}
              userFriend={userFriend}
              setUserFriend={setUserFriend}
              setOpenDrawer={setOpenDrawer}
            />
          }
        </div>
      </div>
      <div
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setOpenDrawer(false);
        }}
      ></div>
    </div>
  );
};

export default Drawer;
