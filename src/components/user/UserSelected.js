import React from "react";
import Badge from "@mui/material/Badge/Badge";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const UserSelected = ({ userFriend }) => {
  return (
    <div className=" bg-white p-4 rounded-lg flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          color="success"
          overlap="circular"
          badgeContent=" "
        >
          <i className="fa-solid fa-user p-2 bg-orange-500 text-white rounded-full"></i>
        </Badge>

        <div>
          <div>
            <div className="text-xl font-semibold">{userFriend?.username}</div>
            <div>+123 456 789</div>
          </div>
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
