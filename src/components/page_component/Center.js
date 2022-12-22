import React, { useContext, useState } from "react";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UserMessage from "../user/UserMessage";
import UserCall from "../user/UserCall";
import { ConversationsContext } from "../../utils/ConversationsContext";
import OnlineUser from "../user/OnlineUser";
const Center = ({
  currentUserId,
  setCurrentChat,
  user,
  setUser,
  userFriend,
  setUserFriend,
}) => {
  const conversations = useContext(ConversationsContext);
  return (
    <div>
      <div className="flex items-center justify-between py-4 border-b">
        <div className="font-bold text-2xl">Customer service</div>
        <div className="flex items-center gap-2">
          <AddIcCallOutlinedIcon />
          <AddCommentOutlinedIcon />
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className="p-2 flex items-center  bg-[#f9f3ee] rounded-lg justify-between">
        <div className="grid grid-cols-2 items-center gap-4 lg:flex">
          <button className="flex items-center justify-center gap-2 focus:bg-white px-4 py-2 rounded-lg focus:duration-200 ">
            <div>All</div>
            <div className="bg-blue-500 text-white px-2 rounded-lg">18</div>
          </button>
          <button className="focus:bg-white px-4 py-2 rounded-lg justify-center">
            Active
          </button>
          <button className="flex items-center justify-center gap-2 focus:bg-white px-4 py-2 rounded-lg focus:duration-200">
            <div>Done</div>
          </button>
          <button className="flex items-center justify-center gap-2 focus:bg-white px-4 py-2 rounded-lg focus:duration-200">
            <div>Unread</div>
            <div className="bg-blue-500 text-white px-2 rounded-lg">18</div>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8 my-4">
        {conversations.map((conversation, index) => (
          <div key={index} onClick={() => setCurrentChat(conversation)}>
            <UserMessage
              user={user}
              setUser={setUser}
              conversation={conversation}
              currentUserId={currentUserId}
              userFriend={userFriend}
              setUserFriend={setUserFriend}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Center;
