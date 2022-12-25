import axios from "axios";
import React, { useState } from "react";

const Modal = ({ setIsOpenModal, user }) => {
  const [friendId, setFriendId] = useState("");
  const handleCloseModal = (e) => {
    if (e.target.id === "container") {
      setIsOpenModal(false);
    }
  };

  const addFriends = async () => {
    if (friendId !== "") {
      const res = await axios.post(
        "https://chatwebserver.vercel.app/conversations/create",
        {
          members: [user?._id, friendId],
        },
        { withCredentials: true }
      );
      if (res.data === 200) {
        setIsOpenModal(false);
      }
      console.log(res);
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
              Add new contact
            </h3>
            <form class="space-y-6" action="#">
              <div>
                <input
                  minLength={2}
                  maxLength={30}
                  id="user id"
                  name="user id"
                  type="text"
                  pattern="^[A-Za-z0-9]{2,30}$"
                  className="outline-none border-2 px-4 rounded-lg py-2 w-full peer required:border-red-500 valid:border-green-500"
                  placeholder="User Id"
                  onChange={(e) => setFriendId(e.target.value)}
                  required
                />
                <div className="text-red-500 hidden peer-invalid:block">
                  Input user id that you want to add as your friend
                </div>
              </div>

              <div class="flex justify-between">
                <div class="flex items-start"></div>
              </div>
              <button
                onClick={addFriends}
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
