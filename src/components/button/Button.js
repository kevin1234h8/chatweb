import React, { FC } from "react";

const Button = ({ setIsOpenModal, isOpenModal, open }) => {
  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <button onClick={handleOpenModal}>
      <div
        className={`flex w-fit text-blue-400 items-center gap-2 rounded-lg border  text-sm ${
          open ? "px-4 py-2" : "px-3 py-3"
        }`}
      >
        <i className="fa-solid fa-plus"></i>
        <div className={`hidden lg:block ${open ? "lg:visible" : "lg:hidden"}`}>
          Add new contact
        </div>
      </div>
    </button>
  );
};

export default Button;
