import React from "react";
import styled from "styled-components";

const CardPerson = ({ name, img, styleTxt }) => {
  return (
    <CardPersonStyled className={img}>
      <p className={styleTxt}>{name}</p>
    </CardPersonStyled>
  );
};

const CardPersonStyled = styled.div`
  height: 350px;
  width: 220px;
  margin-right: 20px;
  border: 2px solid white;
  border-radius: 12px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }

  p {
    border: 2px solid white;
    padding: 2px 10px 2px 10px;
    color: white;
    font-size: 20px;
  }

  @media (max-width: 700px) {
    margin-bottom: 15px;
  }
`;

export default CardPerson;
