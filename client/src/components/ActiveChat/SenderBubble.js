import React, { useEffect, useState } from "react";
import { ChatBubbles } from "./bubbles";

const styling = {
  color: "#91A3C0", 
  background: "#F4F6FA", 
  border: "10px 10px 0 10px", 
  margin: "0 0 10px 10px", 
  align: "right"
};

const SenderBubble = (props) => {
  const [multiples, setMultiples] = useState(false);
  const { time, text, image } = props;

  const info = { text, time, image };

  useEffect(() => {
    if (image) {
      image.length > 1 && setMultiples(true);
    }
  }, [image]);

  return (
    
    <ChatBubbles multiple={multiples} other={false} style={styling} information={info} />
  );
};

export default SenderBubble;
