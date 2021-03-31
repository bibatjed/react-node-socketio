import React, { useState } from "react";
import Form from "./components/FormComponent/Form";
import ChatPage from "./Page/ChatPage";

function App() {
  const [username, setUserName] = useState(localStorage.getItem("username"));

  const updateUserName = (value: string) => {
    setUserName(value);
  };

  return (
    <>{username ? <ChatPage /> : <Form updateUserName={updateUserName} />}</>
  );
}

export default App;
