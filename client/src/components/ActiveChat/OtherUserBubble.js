import React, { useEffect, useState } from "react";
import { ChatBubbles } from "./bubbles";

const styling = {
  color: "#FFFFFF", 
  background: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)", 
  border: "0 10px 10px 10px", 
  margin: "0 10px 10px 0", 
  align: "left"
};

const OtherUserBubble = (props) => {
  const [multiples, setMultiples] = useState(false);
  const { text, time, otherUser, image } = props;

  const info = { text, time, otherUser, image };

  useEffect(() => {
    if (image) {
      image.length > 1 && setMultiples(true);
    }
  }, [image]);

  return (
    <ChatBubbles multiple={multiples} other={true} style={styling} information={info} />
  );
};

export default OtherUserBubble;
