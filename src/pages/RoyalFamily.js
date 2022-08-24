import React from "react";
import styled from "styled-components";
import CardPerson from "../components/royalfamily/CardPerson";
import Title from "../ui-reusable/Title";

const RoyalFamily = () => {
  return (
    <RoyalFamilyStyled>
      <Title text={`"The family royal of kingdom of Colchis"`} />
      <div className="divCard">
        <CardPerson img="king" name="King" />
        <CardPerson img="princess" name="Princess" styleTxt="princessTxt" />
        <CardPerson img="queen" name="Queen" />
      </div>
    </RoyalFamilyStyled>
  );
};

const RoyalFamilyStyled = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .divCard {
    display: flex;
    flex-direction: row;
  }

  .king {
    background-image: url(https://images.pexels.com/photos/41315/africa-african-animal-cat-41315.jpeg?auto=compress&cs=tinysrgb&w=400);
  }

  .princess {
    background-image: url(https://images.pexels.com/photos/12355948/pexels-photo-12355948.jpeg?auto=compress&cs=tinysrgb&w=400);
  }
  .princessTxt {
    color: pink;
    border: 2px solid pink;
  }

  .queen {
    background-image: url(https://images.pexels.com/photos/6436457/pexels-photo-6436457.jpeg?auto=compress&cs=tinysrgb&w=400);
  }
`;

export default RoyalFamily;
