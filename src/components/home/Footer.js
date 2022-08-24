import React, { useState } from "react";
import styled from "styled-components";
import Courrier from "../courrier/Courrier";

const Footer = () => {
  const [secrete, setSecrete] = useState(false);
  return (
    <FooterStyled>
      {secrete ? <Courrier onClick={() => setSecrete(false)} /> : <></>}
      <ul>
        <li>Wild code school</li>
        <li onClick={() => setSecrete(true)}>Courriers</li>
        <li>Challenge realisé pars Kévin Naudy</li>
      </ul>
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
    &:hover {
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
  }
`;

export default Footer;
