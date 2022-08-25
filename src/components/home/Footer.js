import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Courrier from "../courrier/Courrier";

const Footer = () => {
  const [secrete, setSecrete] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <FooterStyled>
      {secrete ? <Courrier onClick={() => setSecrete(false)} /> : <></>}
      {isTabletOrMobile ? (
        <ul>
          <li>WCS</li>
          <li onClick={() => setSecrete(true)}>
            <i className="fa-solid fa-envelope"></i>
          </li>
          <li>Challenge realisé pars DevNdy</li>
        </ul>
      ) : (
        <ul>
          <li>Wild code school</li>
          <li onClick={() => setSecrete(true)}>
            <i className="fa-solid fa-envelope"></i>
          </li>
          <li>Challenge realisé pars Kévin Naudy</li>
        </ul>
      )}
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  height: 3vh;
  background-color: white;
  display: flex;
  flex-direction: row;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    list-style: none;
    color: black;
    font-size: 12px;
    font-style: italic;
    padding: 0 10px 0 10px;
    border-left: 1px solid white;
    border-right: 1px solid white;
    &:hover {
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
  }

  @media (max-width: 700px) {
    height: 4vh;
  }
`;

export default Footer;
