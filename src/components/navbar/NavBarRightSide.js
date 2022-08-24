import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarRightSide = () => {
  return (
    <NavBarRightSideStyled>
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      <NavLink className="navLink" to="/royalfamily">
        Royal Family
      </NavLink>
      <NavLink className="navLink" to="/">
        Royal Assets
      </NavLink>
      <NavLink className="navLink" to="/">
        Contact Us
      </NavLink>
    </NavBarRightSideStyled>
  );
};

const NavBarRightSideStyled = styled.nav`
  display: flex;
  flex-direction: row;

  .navLink {
    color: #272c34;
    text-decoration-color: white;
    margin-right: 20px;
    &:hover {
      text-decoration-color: #272c34;
      cursor: pointer;
    }
  }
`;

export default NavBarRightSide;
