import React from "react";
import styled from "styled-components";

const Title = ({ text }) => {
  return <TitleStyled>{text}</TitleStyled>;
};

const TitleStyled = styled.h1`
  font-size: 35px;
  margin-bottom: 90px;
  font-style: italic;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

export default Title;
