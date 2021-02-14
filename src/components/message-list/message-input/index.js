import React, { useState } from "react";
import { MessageInputWrapper } from "./styled";

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <MessageInputWrapper>
      <input
        value={message}
        onKeyPress={handleKeyPress}
        onChange={handleMessage}
      />
      <button onClick={handleSubmit}>Send</button>
    </MessageInputWrapper>
  );
};

export default MessageInput;
