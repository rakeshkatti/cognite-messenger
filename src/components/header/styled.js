import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 50px;
  background: #20232a;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  position: fixed;
`;

export const AppName = styled.div`
  padding: 0 0.5em;
  cursor: pointer;
`;

export const User = styled.div`
  display: flex;
  padding: 0 0.5em;
  align-items: center;
  img {
    padding: 0 10px;
    border-radius: 50%;
    width: 2em;
  }
`;
