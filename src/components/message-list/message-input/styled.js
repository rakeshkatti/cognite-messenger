import styled from "styled-components";
const primaryBlue = "rgb(2, 152, 255)";
const secondaryGray = "rgb(243, 243, 245)";

export const MessageInputWrapper = styled.div`
  width: 100%;
  bottom: 0;
  position: fixed;
  display: flex;
  height: 2em;
  input {
    outline: none;
    border: none;
    border-radius: 20px;
    flex 1;
    background: ${secondaryGray};
    padding: 2px 10px;
    font-family: inherit;
    color: #333;
  }
  button {
      background: ${primaryBlue};
      color: #fff;
      border: none;
      outline: none;
      border-radius: 20px;
      padding: 5px 30px;
      cursor: pointer;
      &:hover{
        background: rgba(2, 152, 255, 0.8);
      }
  }
`;
