import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation, newMessage } = props;
  const { latestMessageText, otherUser } = conversation;
  const [correctConvo, setCorrectConvo] = useState(false);

  useEffect(() => {
    if (newMessage) {
      //checks if message is in correct conversation
      newMessage.conversationId === conversation.id ? setCorrectConvo(true) : setCorrectConvo(false);
    }
  }, [newMessage, conversation.id]);

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {correctConvo ? newMessage.text : latestMessageText}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;
