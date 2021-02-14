import React, { useState } from "react";
import Message from "./mesage";
import MessageInput from "./message-input";

const MessageList = ({ user, data }) => {
  const [messages, setMessages] = useState(data.messages);

  const sendMessage = (content) => {
    setMessages([
      ...messages,
      {
        participant_id: user.id,
        content,
        type: "text",
      },
    ]);
  };

  return (
    <>
      {messages.map(({ participant_id, content }, index) => {
        return (
          <Message
            key={`${index}_${participant_id}`}
            self={participant_id === user.id}
            content={content}
          />
        );
      })}
      <MessageInput sendMessage={sendMessage} />
    </>
  );
};

export default MessageList;
