import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Badge from "@mui/material/Badge/Badge";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Image } from "cloudinary-react";
const UserSelected = ({ currentChat, currentUserId }) => {
  const [friend, setFriend] = useState([]);
  // console.log(currentChat.members?.find((member) => member !== currentUserId));
  const effectRun = useRef(false);

  useEffect(() => {
    const friendId = currentChat?.members?.find(
      (member) => member !== currentUserId
    );

    const getUserFriend = async () => {
      const res = await axios.get(
        `https://chatwebserver.vercel.app/users/${friendId}`,
        {
          withCredentials: true,
        }
      );

      setFriend(res.data);
    };
    getUserFriend();
  }, [currentUserId, currentChat]);

  return (
    <div className=" bg-white p-4 rounded-lg flex items-center gap-4 justify-between">
      <div className=" flex flex-row md:flex-  gap-4 lg:flex-row">
        <div>
          {friend?.avatar ? (
            <Image
              cloudName="deszjgxlm"
              publicId={friend?.avatar}
              className="w-12 h-12 object-cover rounded-full"
            />
          ) : (
            <i className="fa-solid fa-user p-2 bg-orange-500 text-white rounded-full lg:p-3"></i>
          )}
        </div>

        <div>
          <div className="text-md font-semibold md:text-xl">
            {friend?.username?.charAt(0).toUpperCase() +
              friend?.username?.slice(1)}
          </div>
          <div className="text-sm lg:text-md">+123 456 789</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <CheckCircleOutlineOutlinedIcon />
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  );
};

export default UserSelected;
