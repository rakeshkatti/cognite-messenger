import styled from "styled-components";

export const Name = styled.div``;

export const Thread = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  padding: 3px 10px;
  &:hover {
    background: rgb(243, 243, 245);
  }
  img {
    width: 50px;
    border-radius: 50%;
  }
  ${Name} {
    padding-left: 20px;
  }
`;
