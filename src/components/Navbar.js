import React, { useState } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Badge } from "@mui/material";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleOpenDrawer }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <div className=" md:sticky top-0 flex items-center justify-between px-4 py-2 text-white bg-[#0f0f11] z-10">
        <div className="flex  items-center gap-2 ">
          <i className="fa-solid fa-wifi text-blue-500"></i>
          <div onClick={handleOpenDrawer}>Chat</div>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <Badge color="primary" variant="dot" overlap="circular">
            <NotificationsNoneOutlinedIcon />
          </Badge>
          <Link to="/signup" className="text-white no-underline">
            {user ? (
              <div>{user.username?.split("")[0].toUpperCase()}</div>
            ) : (
              <button className="px-4 py-2 outline-none rounded-lg  border-[#303032] border">
                Signup
              </button>
            )}
          </Link>

          <i
            onClick={handleOpenMenu}
            class="fa-solid fa-bars cursor-pointer"
          ></i>
        </div>

        <div className="hidden items-center gap-4 rounded-lg px-4 py-2 text-center  bg-[#28272a] border-[#303032] md:flex">
          <i className="fa-solid fa-search text-center"></i>
          <input
            type="text"
            placeholder="search"
            className="outline-none text-white bg-[#28272a] placeholder-white"
          />
        </div>
        <div className="hidden  items-center gap-4 md:flex">
          <div className="flex items-center gap-4 border-[#303032] border px-4 py-2 rounded-lg ">
            <div className="flex items-center gap-2">
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
              <div>{user.username?.split("")[0].toUpperCase()}</div>
            ) : (
              <button className="px-4 py-2 outline-none rounded-lg  border-[#303032] border">
                Signup
              </button>
            )}
          </Link>
        </div>
      </div>

      {openMenu ? (
        <div
          className={`px-6 py-2 bg-[#222227] text-white flex flex-col gap-2 `}
        >
          <div>
            <div className="flex items-center gap-4 rounded-lg px-4 py-2 text-center  bg-white border-[#303032] ">
              <i className="fa-solid fa-search text-center text-black"></i>
              <input
                type="text"
                placeholder="search"
                className="outline-none  bg-white text-black "
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
