import { createContext, useState } from "react";

export const CourrierUser = createContext();

export function UserCourrier(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMess, setUserMess] = useState("");

  const [courrier, setCourrier] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert(userName + " your message send to KingDom");
    const newList = {
      name: userName,
      email: userEmail,
      message: userMess,
    };
    setCourrier(newList);
    setUserEmail("");
    setUserName("");
    setUserMess("");
  }

  function inputName(e) {
    setUserName(e.target.value);
  }
  function inputEmail(e) {
    setUserEmail(e.target.value);
  }
  function inputMess(e) {
    setUserMess(e.target.value);
  }

  return (
    <CourrierUser.Provider
      value={{
        userName,
        userEmail,
        userMess,
        courrier,
        handleSubmit,
        inputName,
        inputEmail,
        inputMess,
      }}
    >
      {props.children}
    </CourrierUser.Provider>
  );
}
