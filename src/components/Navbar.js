import React, { useState } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Image } from "cloudinary-react";
const Navbar = ({ user, handleOpenDrawer, setSearch }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const notify = () => {
    toast(`${user._id}`);
  };

  return (
    <div>
      <div className=" md:sticky top-0 flex items-center justify-between px-4 py-2 text-white bg-[#0f0f11] z-10">
        <div className="flex  items-center gap-2 ">
          <i className="fa-solid fa-wifi text-blue-500"></i>
          <div onClick={handleOpenDrawer}>Chat</div>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <div>
            <button onClick={notify}>
              <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Get your id</span>
                </span>
              </div>
            </button>
          </div>
          <Badge color="primary" variant="dot" overlap="circular">
            <NotificationsNoneOutlinedIcon />
          </Badge>
          {user?.avatar ? (
            <Image
              cloudName="deszjgxlm"
              publicId={user?.avatar}
              className="w-12 h-12 object-cover rounded-full"
            />
          ) : (
            <Badge
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              color="success"
              overlap="circular"
              badgeContent=" "
            >
              <i className="fa-solid fa-user p-2 bg-orange-500 text-white rounded-full"></i>
            </Badge>
          )}
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="hidden  items-center gap-4 md:flex">
          <div>
            <button onClick={notify}>
              <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Get your id</span>
                </span>
              </div>
            </button>
          </div>
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
            {user?.avatar ? (
              <Image
                cloudName="deszjgxlm"
                publicId={user?.avatar}
                className="w-16 h-16 object-cover rounded-full"
              />
            ) : (
              <Badge
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                color="success"
                overlap="circular"
                badgeContent=" "
              >
                <i className="fa-solid fa-user p-2 bg-orange-500 text-white rounded-full"></i>
              </Badge>
            )}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Navbar;
