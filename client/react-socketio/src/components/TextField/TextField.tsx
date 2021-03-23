import React from "react";
import { TextField } from "@material-ui/core";

type reactChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface Props {
  value?: string;
  onChange: (e: reactChangeEvent) => void;
}

export default function TextFieldInput({ value, onChange }: Props) {
  return (
    <TextField
      value={value}
      onChange={(e: reactChangeEvent) => {
        onChange(e);
      }}
    ></TextField>
  );
}
