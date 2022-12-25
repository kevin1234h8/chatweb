import React from "react";
import Badge from "@mui/material/Badge/Badge";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const UserSelected = ({ userFriend }) => {
  return (
    <div className=" bg-white p-4 rounded-lg flex items-center gap-4 justify-between">
      <div className=" flex flex-row md:flex-  gap-4 lg:flex-row">
        <div>
          <Badge
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            color="success"
            overlap="circular"
            badgeContent=" "
          >
            <i className="fa-solid fa-user p-1 bg-orange-500 text-white rounded-full md:p-2"></i>
          </Badge>
        </div>

        <div>
          <div className="text-md font-semibold md:text-xl">
            {userFriend?.username?.charAt(0).toUpperCase() +
              userFriend?.username?.slice(1)}
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
