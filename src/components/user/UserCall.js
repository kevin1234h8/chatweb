import React from "react";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";

const UserCall = ({ name, message, time }) => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-user p-3 bg-orange-500 text-white rounded-full"></i>
        <div className="flex flex-col">
          <div className="font-semibold text-xl">{name}</div>
          <div className="flex items-center gap-2 text-green-400">
            <AddIcCallOutlinedIcon />
            <div>{message}</div>
          </div>
        </div>
      </div>
      <div className="text-sm ">{time}</div>
    </div>
  );
};

export default UserCall;
