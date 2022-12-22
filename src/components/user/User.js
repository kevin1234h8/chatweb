import axios from "axios";
import React, { useEffect } from "react";

const User = ({ name, conversation, currentUserId, open }) => {
  const [user, setUser] = React.useState([]);
  useEffect(() => {
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
      setUser(res.data);
    };
    getUserFriend();
  }, [currentUserId, conversation]);

  return (
    <div className="flex items-center gap-2">
      <i className="fa-solid fa-user p-3 bg-orange-500 text-white rounded-full"></i>
      <div className={` ${open ? "scale-100" : "scale-0"}`}>
        {user?.username}
      </div>
    </div>
  );
};

export default User;
