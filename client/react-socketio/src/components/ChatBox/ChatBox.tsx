import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "50rem",
    overflowY: "scroll",
  },
});

interface Chat {
  username: string;
  message: string;
}

export default function ChatBox({ data }: { data: Chat[] }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        {data.map(({ username, message }) => {
          return (
            <>
              <Typography color="textSecondary" gutterBottom>
                {username}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {message}
              </Typography>
            </>
          );
        })}
      </CardContent>
    </Card>
  );
}
