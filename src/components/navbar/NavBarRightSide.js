import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarRightSide = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [close, setClose] = useState(false);

  return (
    <NavBarRightSideStyled>
      {isTabletOrMobile ? (
        close === false ? (
          <i onClick={() => setClose(true)} className="fa-solid fa-bars"></i>
        ) : (
          <div className="reponsiveMenu">
            <div>
              <button onClick={() => setClose(false)}>X</button>
            </div>
            <NavLink className="navLinkMobile" to="/">
              Home
            </NavLink>
            <NavLink className="navLinkMobile" to="/royalfamily">
              Royal Family
            </NavLink>
            <NavLink className="navLinkMobile" to="/royalassets">
              Royal Assets
            </NavLink>
            <NavLink className="navLinkMobile" to="/contact">
              Contact Us
            </NavLink>
          </div>
        )
      ) : (
        <>
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="/royalfamily">
            Royal Family
          </NavLink>
          <NavLink className="navLink" to="/royalassets">
            Royal Assets
          </NavLink>
          <NavLink className="navLink" to="/contact">
            Contact Us
          </NavLink>
        </>
      )}
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

  //mobile:

  .reponsiveMenu {
    background-color: white;
    width: 150px;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
      text-align: end;
      button {
        margin: 24px 25px;
        border: none;
        background-color: white;
        font-size: 20px;
      }
    }
  }

  .navLinkMobile {
    color: #272c34;
    text-decoration-color: white;
    margin-top: 20px;
    margin-right: 10px;
    border: 1px solid white;
    &:hover {
      border: 1px solid black;
      cursor: pointer;
    }
  }
`;

export default NavBarRightSide;
