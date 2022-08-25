import React from "react";
import styled from "styled-components";
import Presentation from "../components/home/Presentation";
import Title from "../ui-reusable/Title";

const Home = () => {
  return (
    <HomeStyled>
      <Title text={`"Welcome to the Royal Kingdom of Colchis"`} />
      <Presentation />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  min-height: 90vh;
  background-image: url(https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 1, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

export default Home;
