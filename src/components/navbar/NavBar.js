import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../ui-reusable/Logo";
import NavBarRightSide from "./NavBarRightSide";

const NavBar = () => {
  return (
    <NavBarStyled>
      <NavLink className="navLink" to="/">
        <Logo />
      </NavLink>
      <NavBarRightSide />
    </NavBarStyled>
  );
};

const NavBarStyled = styled.header`
  height: 7vh;
  background-color: white;
  color: #272c34;
  padding: 0 30px 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .navLink {
    color: black;
    text-decoration: white;
  }
`;

export default NavBar;
