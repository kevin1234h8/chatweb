import React from "react";

const Modal = ({ setIsOpenModal, text }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === "container") {
      setIsOpenModal(false);
    }
  };

  return (
    <div
      onClick={handleCloseModal}
      id="container"
      className="fixed text-black inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
    >
      <div className="bg-white p-4 rounded-lg flex flex-col gap-4 max-w-2xl">
        <div className="p-4 text-black font-semibold text-center text-xl">
          {text}
        </div>
        <form action="" className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="name"
            className="border-b border-t p-4 outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="border-b border-t p-4 outline-none"
          />
          <input
            type="text"
            placeholder="company"
            className="border-b border-t p-4 outline-none"
          />

          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setIsOpenModal(false)}
              className="px-4 py-2 rounded-lg outline-none border"
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg outline-none border">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
