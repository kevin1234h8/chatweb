import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const UserMessage = ({
  message,
  time,
  conversation,
  currentUserId,
  userFriend,
  setUserFriend,
}) => {
  const effectRun = useRef(false);
  useEffect(() => {
    if (effectRun.current === false) {
      const friendId = conversation.members.find(
        (member) => member !== currentUserId
      );

      const getUserFriend = async () => {
        const res = await axios.get(
          `https://chatwebserver.vercel.app/users/${friendId}`,
          {
            withCredentials: true,
          }
        );
        setUserFriend(res.data);
      };
      getUserFriend();

      return () => {
        console.log("effect");
        effectRun.current = true;
      };
    }
  }, [currentUserId, conversation]);

  return (
    <button className="flex items-center gap-2 justify-between hover:bg-orange-100 p-2 w-full focus:bg-orange-100 rounded-lg">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-user p-3 bg-orange-500 text-white rounded-full"></i>
        <div className="flex flex-col">
          <div className="font-semibold text-xl">{userFriend?.username}</div>
          <div>{message}</div>
        </div>
      </div>
      <div className="text-sm">{time}</div>
    </button>
  );
};

export default UserMessage;
