import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Badge } from "@mui/material";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="sticky top-0 flex items-center justify-between px-4 py-2 text-white bg-[#0f0f11] z-10">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-wifi text-blue-500"></i>
        <div>Chat</div>
      </div>
      <div className="flex items-center gap-4 rounded-lg px-4 py-2 text-center  bg-[#28272a] border-[#303032]">
        <i className="fa-solid fa-search text-center"></i>
        <input
          type="text"
          placeholder="search"
          className="outline-none text-white bg-[#28272a] placeholder-white"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 border-[#303032] border px-4 py-2 rounded-lg ">
          <div>Priyanto</div>
          <div className="flex items-center gap-2">
            <div>00:34</div>
            <i className="fa-solid fa-phone bg-red-500 p-2 rounded-full"></i>
          </div>
        </div>
        <div>
          <Badge color="primary" variant="dot" overlap="circular">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </div>
        <div>
          <Badge
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            color="success"
            overlap="circular"
            badgeContent=" "
          >
            <i className="fa-solid fa-user p-2 bg-orange-500 text-white rounded-full"></i>
          </Badge>
        </div>
        <Link to="/signup" className="text-white no-underline">
          {user ? (
            <div>{user.username?.split("")[0] ?? [].toUpperCase()}</div>
          ) : (
            <button className="px-4 py-2 outline-none rounded-lg  border-[#303032] border">
              Signup
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
