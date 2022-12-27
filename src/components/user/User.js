import axios from "axios";
import React, { useEffect } from "react";
import { Image } from "cloudinary-react";
const User = ({ conversation, currentUserId, open }) => {
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
      {user?.avatar ? (
        <Image
          cloudName="deszjgxlm"
          publicId={user?.avatar}
          className="w-12 h-12 object-cover rounded-full"
        />
      ) : (
        <i className="fa-solid fa-user p-3 bg-orange-500 text-white rounded-full"></i>
      )}

      <div className={`hidden lg:block ${open ? "scale-100" : "scale-0"}`}>
        {user?.username?.charAt(0).toUpperCase() + user.username?.slice(1)}
      </div>
    </div>
  );
};

export default User;
