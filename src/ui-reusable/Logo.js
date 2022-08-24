import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoStyled>Tech Challenge</LogoStyled>;
};

const LogoStyled = styled.h2`
  font-size: 20px;
  border: 2px solid #272c34;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default Logo;
