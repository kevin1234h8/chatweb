import React from "react";
import { format } from "timeago.js";
const Message = ({ you, message }) => {
  return (
    <div
      className={`flex items-center ${you ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex items-start flex-col  gap-2 ${
          you ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div>
          <div
            className={`p-2 rounded-lg w-auto max-w-sm break-words  ${
              you ? "bg-blue-500 text-white text-right" : "bg-white text-black"
            }`}
          >
            {message.text}
          </div>
          <div className="flex text-sm justify-end">
            {format(message.createdAt)}
          </div>
        </div>
        <i className="fa-solid fa-user p-2 bg-orange-500 text-white rounded-full"></i>
      </div>
    </div>
  );
};

export default Message;
