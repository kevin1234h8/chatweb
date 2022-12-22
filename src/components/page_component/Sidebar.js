import React, { useContext, useState } from "react";
import activity from "../../assets/activity.svg";
import analytic from "../../assets/analytic.svg";
import Button from "../button/Button";
import Modal from "../Modal";
import { ConversationsContext } from "../../utils/ConversationsContext";
import User from "../user/User";
const Sidebar = ({
  setIsOpenModal,
  isOpenModal,
  currentUserId,
  setCurrentChat,
  open,
}) => {
  const conversations = useContext(ConversationsContext);

  return (
    <div className="relative">
      <div className={`flex items-center gap-2 py-2 ${open ? "px-2" : "px-0"}`}>
        <i className="fa-solid fa-fire bg-red-500 p-3 text-white rounded-full"></i>
        <div name="" id="" className="outline-none appearance-none ">
          <div value="" className={`${open ? "scale-100" : "scale-0"}`}>
            Fireart Studio
          </div>
        </div>
      </div>
      <div className="border-b py-4">
        <div className="flex items-center gap-2 p-3">
          <img src={activity} alt="" />
          <div className={`${open ? "scale-100" : "scale-0"}`}>Activity</div>
        </div>
        <div className="flex items-center gap-2 p-3">
          <i className="fa-solid fa-address-book"></i>
          <div className={`${open ? "scale-100" : "scale-0"}`}>Contacts</div>
        </div>
        <div className="flex items-center gap-2 p-3">
          <img src={analytic} alt="" />
          <div className={`${open ? "scale-100" : "scale-0"}`}>Analytics</div>
        </div>
      </div>
      <div className="border-b py-4 flex flex-col gap-4">
        <div className={`${open ? "scale-100" : "scale-0"}`}>
          Business Number
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-money-check-dollar bg-green-500 p-3 rounded-full text-white"></i>
          <div className={`${open ? "scale-100" : "scale-0"}`}>
            <div>Marketing</div>
            <div>+123 456 789</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-users bg-blue-500 text-white p-3 rounded-full"></i>
          <div className={`${open ? "scale-100" : "scale-0"}`}>
            <div>Customer service</div>
            <div>+123 456 789</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-shop bg-[#5c68ff] p-3 rounded-full text-white"></i>
          <div className={`${open ? "scale-100" : "scale-0"}`}>
            <div>Shop</div>
            <div>+123 456 789</div>
          </div>
        </div>
        <Button
          open={open}
          text="Add new number"
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        />
      </div>
      <div className="border-b py-4 flex flex-col gap-4">
        <div className={`${open ? "scale-100" : "scale-0"}`}>My Teams</div>
        {conversations.map((conversation, index) => {
          <div onClick={() => setCurrentChat(conversation)}></div>;

          return (
            <User
              key={index}
              currentUserId={currentUserId}
              conversation={conversation}
              open={open}
            />
          );
        })}

        <Button
          open={open}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          text="Invite new friend"
        />
      </div>
      <div className="flex items-center gap-2 mt-8">
        <i className="fa-solid fa-globe"></i>
        <div>Support</div>
      </div>
    </div>
  );
};

export default Sidebar;
