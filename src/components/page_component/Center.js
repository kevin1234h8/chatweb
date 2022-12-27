import React, { useContext, useState } from "react";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import UserMessage from "../user/UserMessage";
import { ConversationsContext } from "../../utils/ConversationsContext";
import Button from "../button/Button";
const Center = ({
  currentUserId,
  setCurrentChat,
  user,
  isOpenModal,
  setIsOpenModal,
  setUser,
  userFriend,
  setUserFriend,
  setOpenDrawer,
  search,
}) => {
  const conversations = useContext(ConversationsContext);
  return (
    <div>
      <div className="flex items-center justify-between py-4 border-b">
        <div className="font-bold text-md lg:text-2xl">Customer service</div>
        <div className="flex items-center gap-2">
          <AddIcCallOutlinedIcon />
          <AddCommentOutlinedIcon />
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className="p-2  flex items-center justify-center  bg-[#f9f3ee] rounded-lg ">
        <div className="grid  w-full grid-cols-1 place-items-center gap-4 lg:grid-cols-2">
          <button className="flex w-full items-center justify-center gap-2 focus:bg-white px-4 py-2 rounded-lg focus:duration-200 ">
            <div>All</div>
            <div className="bg-blue-500 text-white px-2 rounded-lg">18</div>
          </button>
          <button className="focus:bg-white w-full px-4 py-2 rounded-lg justify-center">
            Active
          </button>
          <button className="flex w-full items-center justify-center gap-2 focus:bg-white px-4 py-2 rounded-lg focus:duration-200">
            <div>Done</div>
          </button>
          <button className="flex w-full items-center justify-center gap-2 focus:bg-white px-4 py-2 rounded-lg focus:duration-200">
            <div>Unread</div>
            <div className="bg-blue-500 text-white px-2 rounded-lg">18</div>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8 my-4">
        <div className="font-bold text-md lg:text-2xl">Friend</div>
        {conversations.map((conversation, index) => (
          <div key={index} onClick={() => setCurrentChat(conversation)}>
            <UserMessage
              setOpenDrawer={setOpenDrawer}
              user={user}
              search={search}
              setUser={setUser}
              conversation={conversation}
              currentUserId={currentUserId}
              userFriend={userFriend}
              setUserFriend={setUserFriend}
            />
          </div>
        ))}
        <Button isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      </div>
    </div>
  );
};

export default Center;
