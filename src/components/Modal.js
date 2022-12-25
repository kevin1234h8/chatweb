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
      tabindex="-1"
      aria-hidden="true"
      class="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black bg-opacity-25   "
    >
      <div class="max-w-md w-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 text-center">
              {text}
            </h3>
            <form class="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  minLength={2}
                  maxLength={12}
                  id="username"
                  name="username"
                  type="text"
                  pattern="^[A-Za-z0-9]{3,16}$"
                  className="outline-none border-2 px-4 rounded-lg py-2 w-full peer required:border-red-500 valid:border-green-500"
                  placeholder="Username"
                  required
                />
                <div className="text-red-500 hidden peer-invalid:block">
                  Username must be at 3 - 16 character and not contain a special
                  character
                </div>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="outline-none w-full border-2 px-4 py-2 rounded-lg peer required:border-red-500 valid:border-green-500"
                  pattern={
                    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
                  }
                />
                <div className="text-red-500 hidden peer-invalid:block">
                  type a valid email
                </div>
              </div>
              <div class="flex justify-between">
                <div class="flex items-start"></div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add new member
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
