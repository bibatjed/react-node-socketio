import React from "react";
import { Button as ButtonComponent, ButtonProps } from "@material-ui/core";

interface Props extends ButtonProps {
  name: string;
  onClick: () => void;
}

export default function Button({ style, name, onClick, color = "primary" }: Props) {
  return (
    <ButtonComponent style={style} color={color} variant="contained" onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}
