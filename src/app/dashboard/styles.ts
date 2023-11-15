import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: red;
  color: #fff;
  padding-block: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  border: none;
  min-width: 200px;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
