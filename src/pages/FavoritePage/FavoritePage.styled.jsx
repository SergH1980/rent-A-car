import styled from "styled-components";

export const ReturnButton = styled.button`
  width: 170px;
  margin: 0 auto;
  height: 44px;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  transition: all 250ms;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
    color: white;
  }
`;
