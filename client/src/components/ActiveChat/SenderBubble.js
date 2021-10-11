import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginBottom: "10px",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    textAlign: "right"
  },
  imageBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    overflow: "hidden",
    margin: "0 0 10px 10px",
    '& img': {
      maxWidth: "250px",
      maxHeight: "200px",
      marginBottom: "-5px",
    }
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const [multiples, setMultiples] = useState(false);
  const { time, text, image } = props;

  useEffect(() => {
    if (image) {
      image.length > 1 && setMultiples(true);
    }
  }, [image]);

  return (
    <Box>
      {multiples ? (
        <Box className={classes.root}>
          {text && 
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
          }
          <Box className={classes.imageBox}>
            {image.map(e => {
              return <Box className={classes.bubble}><img src={e} alt="send success" /></Box>
            })}
          </Box>
          <Typography className={classes.date}>{time}</Typography>
        </Box> 
        ) : (
        <Box className={classes.root}>
          <Typography className={classes.date}>{time}</Typography>
          <Box className={classes.bubble}>
            {image && image.map(e => {return <img src={e} alt="send success" />})}
            {text && <Typography className={classes.text}>{text}</Typography>}
          </Box>
        </Box>
        )
      }
    </Box>
  );
};

export default SenderBubble;
