import React from "react";
import styled from "styled-components";
import FormContact from "../components/contact/FormContact";
import Title from "../ui-reusable/Title";

const Contact = () => {
  return (
    <ContactStyled>
      <Title text={`"Contact the KingDom"`} />
      <FormContact />
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    height: 89vh;
  }
`;

export default Contact;
