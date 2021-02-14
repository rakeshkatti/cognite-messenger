import styled from "styled-components";

const Message = styled.div`
  display: flex;
`;

export const MessageBubble = styled.div`
  padding: 10px;
  border-radius: 20px;
`;

export const SelfMessage = styled(Message)`
  text-align: right;
  color: white;
  ${MessageBubble} {
    width: auto;
    background: rgb(2, 152, 255);
    margin-left: auto;
  }
`;

export const ParticipantMessage = styled(Message)`
  text-align: left;
  ${MessageBubble} {
    width: auto;
    background: rgb(228, 230, 235);
    margin-right: auto;
  }
`;
