import React, { useState } from "react";
import styled from "styled-components";

const FormContact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMess, setUserMess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(userName + " your message send to KingDom");
    setUserName("");
    setUserEmail("");
    setUserMess("");
  }

  return (
    <FormContactStyled onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
          onChange={(e) => setUserEmail(e.target.value)}
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
          onChange={(e) => setUserMess(e.target.value)}
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
