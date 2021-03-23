import React, { useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Button/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  card: {
    maxWidth: "20%",
    height: "10rem",
    padding: "10rem",
  },
  button: {
    marginTop: "400px",
  },
});

export default function Form({
  updateUserName,
}: {
  updateUserName: (value: string) => void;
}) {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickSubmit = () => {
    localStorage.setItem("username", inputValue);

    updateUserName(inputValue);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input
              value={inputValue}
              onChange={onChange}
              id="my-input"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              Enter your username
            </FormHelperText>
            <Button
              style={{ marginTop: "20px" }}
              name={"submit"}
              onClick={onClickSubmit}
            />
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}
