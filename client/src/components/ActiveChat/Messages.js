import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId, conversationId, newMessage } = props;
  const [correctConvo, setCorrectConvo] = useState(false);

  useEffect(() => {
    if (newMessage) {
      //checks if message is in correct conversation
      newMessage.conversationId === conversationId ? setCorrectConvo(true) : setCorrectConvo(false);
      //makes sure new message doesn't duplicate on re-render
      messages.forEach(e => {
        e.text === newMessage.text && setCorrectConvo(false);
      })
    }
  }, [messages, newMessage, conversationId]);

  const makeTime = (message) => {
    return moment(message.createdAt).format("h:mm")
  };

  return (
    <Box>
      {messages.map((message) => (
        <Box key={message.id}>
          {message.senderId === userId ? (
            <SenderBubble text={message.text} time={makeTime(message)} />
          ) : (
            <OtherUserBubble text={message.text} time={makeTime(message)} otherUser={otherUser} />
          )}
        </Box>
      ))}
      {correctConvo && <SenderBubble text={newMessage.text} time={makeTime(newMessage)} />}
    </Box>
  );
};

export default Messages;
