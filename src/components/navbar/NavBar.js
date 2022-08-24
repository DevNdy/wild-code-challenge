import React from "react";
import styled from "styled-components";
import Logo from "../../ui-reusable/Logo";
import NavBarRightSide from "./NavBarRightSide";

const NavBar = () => {
  return (
    <NavBarStyled>
      <Logo />
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
`;

export default NavBar;
