import React, { useContext } from "react";
import styled from "styled-components";
import { CourrierUser } from "../../context/context";

const Courrier = ({ onClick }) => {
  const { courrier } = useContext(CourrierUser);

  return (
    <CourrierStyled>
      <div className="header">
        <p></p>
        <h3>Ici ce trouve le courrier du royaume...</h3>
        <button onClick={onClick}>X</button>
      </div>
      {courrier.name !== "" ? (
        <div className="message">
          <p>
            Expediteur: <span>{courrier.name}</span>
          </p>
          <p>
            Email: <span>{courrier.email}</span>
          </p>
          <p>
            Message: <span>{courrier.message}</span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </CourrierStyled>
  );
};

const CourrierStyled = styled.div`
  min-height: 200px;
  width: 100%;
  color: black;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;

  .header {
    padding: 5px 5px 5px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      height: 30px;
      width: 30px;
    }
    h3 {
      color: black;
    }
  }

  .message {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 12px;
      color: orange;
      span {
        color: black;
        font-style: italic;
      }
    }
  }
`;

export default Courrier;
