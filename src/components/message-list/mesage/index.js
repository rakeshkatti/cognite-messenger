import React from "react";
import { SelfMessage, ParticipantMessage, MessageBubble } from "./styled";

const Message = ({ otherParticipants, self, content }) => {
  const MessageWrapper = self ? SelfMessage : ParticipantMessage;
  return (
    <MessageWrapper self={self}>
      <MessageBubble>{content}</MessageBubble>
    </MessageWrapper>
  );
};

export default Message;
