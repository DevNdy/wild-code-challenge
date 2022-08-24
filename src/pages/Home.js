import React from "react";
import styled from "styled-components";
import Presentation from "../components/home/Presentation";

const Home = () => {
  return (
    <HomeStyled>
      <h1>Welcome to the Royal Kingdom of Colchis</h1>
      <Presentation />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  height: 90vh;
  background-image: url(https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 1, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  h1 {
    font-size: 35px;
    margin-bottom: 90px;
  }
`;

export default Home;
