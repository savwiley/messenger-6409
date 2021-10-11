import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
    overflow: "hidden",
    margin: "0 10px 10px 0",
    '& img': {
      maxWidth: "250px",
      maxHeight: "200px",
      marginBottom: "-5px",
    }
  },
  imageBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
  }
}));

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const [multiples, setMultiples] = useState(false);
  const { text, time, otherUser, image } = props;

  useEffect(() => {
    if (image) {
      image.length > 1 && setMultiples(true);
    }
  }, [image]);

  return (
    <Box>
      {multiples ? (
        <Box className={classes.root}>
          <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar}></Avatar>
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
            <Typography className={classes.usernameDate}>
              {otherUser.username} {time}
            </Typography>
        </Box>
      ) : (
        <Box className={classes.root}>
          <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar}></Avatar>
          <Box>
            <Typography className={classes.usernameDate}>
              {otherUser.username} {time}
            </Typography>
            <Box className={classes.bubble}>
              {image && <img src={image} alt="send success" />}
              {text && <Typography className={classes.text}>{text}</Typography>}
            </Box>
          </Box>
        </Box>
        )
      }
        
    </Box>
  );
};

export default OtherUserBubble;
