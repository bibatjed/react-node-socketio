import React, { useCallback, useEffect, useState } from "react";
import Button from "../components/Button/Button";
import ChatBox from "../components/ChatBox/ChatBox";
import TextFieldInput from "../components/TextField/TextField";
import Container from "@material-ui/core/Container";

import { io } from "socket.io-client";

//MOVE TO ENV
const ENDPOINT = "http://localhost:3000";
const socket = io(ENDPOINT);

//FIND A WAY TO MAKE THIS AS GLOBAL
interface Chat {
  username: string;
  message: string;
}

function ChatPage() {
  const [currentMesssage, setCurrentMessage] = useState<Chat[]>([]);
  const [messageValue, setMessageValue] = useState<string>();

  // const onChange = useCallback(() => {});

  const submitChat = () => {
    socket.emit("new-chat", {
      username: localStorage.getItem("username"),
      message: messageValue,
    });

    resetInputValue();
  };

  const resetInputValue = () => {
    setMessageValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageValue(e.target.value);
  };

  useEffect(() => {
    socket.on("new-chat-list", (data) => {
      setCurrentMessage((updatedMessage) => [...updatedMessage, data]);
    });
  }, []);

  return (
    <Container>
      <ChatBox data={currentMesssage} />
      <TextFieldInput value={messageValue} onChange={onChange}></TextFieldInput>
      <Button name="Send" onClick={submitChat} />
    </Container>
  );
}

export default ChatPage;
