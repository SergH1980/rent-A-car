import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  /* align-items: center; */
`;
export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  text-decoration: none;
  color: #3470ff;
  font-size: 30px;
  font-weight: 600;
  text-shadow: none;

  transition: all 250ms;
  &:hover,
  &:focus {
    color: #0b44cd;
    text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.3);
  }
`;

export const NavItemTitle = styled.span``;
