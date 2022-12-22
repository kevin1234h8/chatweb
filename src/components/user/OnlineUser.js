import React, { useState } from "react";
import { Badge } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { ConversationsContext } from "../../utils/ConversationsContext";
const OnlineUser = (onlineUsers, currentUserId, setCurrentChat) => {
  const conversations = useContext(ConversationsContext);

  const [friends, setFriends] = useState([]);
  const [conversation, setConversation] = useState("");
  const [onlineFriends, setOnlineFriends] = useState([]);

  // useEffect(() => {
  //   const friendId = conversation.members?.find(
  //     (member) => member !== currentUserId
  //   );
  //   const getFriends = async () => {
  //     const res = await axios.get(`http://localhost:5000/users/${friendId}`, {
  //       withCredentials: true,
  //     });
  //     setFriends(res.data);
  //   };

  //   getFriends();
  // }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-bold">Online user</div>
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Badge
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            color="success"
            overlap="circular"
            badgeContent=" "
          >
            <i className="fa-solid fa-user p-2 bg-orange-500 text-white rounded-full"></i>
          </Badge>
          <div className="flex flex-col">
            <div className="font-semibold text-xl">Kevin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineUser;
