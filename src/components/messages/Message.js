import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import { Image } from "cloudinary-react";
import axios from "axios";
const Message = ({ you, message, user, currentChat, currentUserId }) => {
  const [userFriend, setUserFriend] = useState("");
  useEffect(() => {
    const friendId = currentChat.members?.find(
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
  }, [currentUserId, currentChat]);
  return (
    <div
      className={`flex items-center ${you ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex items-start flex-col  gap-2 ${
          you ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div>
          <div
            className={`p-2 rounded-lg w-auto max-w-sm break-words text-sm  ${
              you ? "bg-blue-500 text-white text-right" : "bg-white text-black"
            } md:text-md`}
          >
            {message.text}
          </div>
          <div className="flex text-xs justify-end">
            {format(message.createdAt)}
          </div>
        </div>
        {user?.avatar ? (
          <Image
            cloudName="deszjgxlm"
            publicId={you ? user?.avatar : userFriend?.avatar}
            className="w-12 h-12 object-cover rounded-full"
          />
        ) : (
          <i className="fa-solid fa-user p-2 bg-orange-500 text-white rounded-full lg:p-3"></i>
        )}
      </div>
    </div>
  );
};

export default Message;
