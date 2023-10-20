import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const BurgerBtn = styled.button`
  background-color: transparent;
  color: #3470ff;
  position: fixed;
  top: 50px;
  /* left: 50px; */

  width: 42px;
  height: 42px;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const BurgerIcon = styled(FaBars)`
  width: 42px;
  height: 42px;
  transition: all 250ms;

  &:hover,
  &:focus {
    fill: #0b44cd;
  }
`;
