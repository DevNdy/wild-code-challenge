import React, { useContext } from "react";
import styled from "styled-components";
import { CourrierUser } from "../../context/context";

const FormContact = () => {
  const { userName, userEmail, userMess, handleSubmit, inputName, inputEmail, inputMess } =
    useContext(CourrierUser);

  return (
    <FormContactStyled onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          value={userName}
          onChange={inputName}
          type="text"
          name="name"
          placeholder="What is your name?"
          required
        />
      </label>
      <label>
        Email:
        <input
          value={userEmail}
          onChange={inputEmail}
          type="email"
          name="name"
          placeholder="What is your email?"
          required
        />
      </label>
      <label>
        Message:
        <textarea
          value={userMess}
          onChange={inputMess}
          rows="10"
          cols="30"
          placeholder="what is your message"
        ></textarea>
      </label>
      <button>Send massage</button>
    </FormContactStyled>
  );
};

const FormContactStyled = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }
  input {
    height: 30px;
    width: 300px;
  }

  button {
    height: 30px;
    width: 308px;
    margin-top: 5px;
    border: none;
    background-color: orange;
    font-size: 18px;
    &:hover {
      background-color: white;
      border: 2px orange solid;
      color: orange;
    }
  }
`;

export default FormContact;
