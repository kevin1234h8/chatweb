import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "cloudinary-react";
const UserMessage = ({ conversation, currentUserId }) => {
  const [userFriends, setUserFriends] = useState([]);
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
        setUserFriends(res.data);
      };
      getUserFriend();

      return () => {
        effectRun.current = true;
      };
    }
  }, [currentUserId, conversation]);

  return (
    <button className="flex items-center gap-2 justify-between hover:bg-orange-100 p-2 w-full focus:bg-orange-100 rounded-lg">
      <div className="flex items-center gap-2">
        {userFriends?.avatar ? (
          <Image
            cloudName="deszjgxlm"
            publicId={userFriends?.avatar}
            className="w-12 h-12 object-cover rounded-full"
          />
        ) : (
          <i className="fa-solid fa-user p-3 bg-orange-500 text-white rounded-full "></i>
        )}
        <div className="flex flex-col">
          <div className="font-semibold text-md lg:text-xl">
            {userFriends?.username?.charAt(0).toUpperCase() +
              userFriends?.username?.slice(1)}
          </div>
        </div>
      </div>
    </button>
  );
};

export default UserMessage;
