import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

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
  bubble: props => ({
    background: props.background,
    borderRadius: props.border,
    overflow: "hidden",
    margin: props.margin,
    '& img': {
      maxWidth: "fit-container",
      maxHeight: "200px",
      marginBottom: "-5px",
    }
  }),
  multiImages: {
    maxWidth: "150px",
    maxHeight: "100px",
  },
  imageBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: props => ({
    fontSize: 14,
    fontWeight: "bold",
    color: props.color,
    letterSpacing: -0.2,
    padding: 8,
    textAlign: props.align,
  }),
}));

export const ChatBubbles = (props) => {
  const {multiple, other, style, information} = props;
  const classes = useStyles(style);
  return (
    <Box>
      {multiple ? (
        <Box className={classes.root}>
          {other &&
            <Avatar alt={information.otherUser.username} src={information.otherUser.photoUrl} className={classes.avatar}></Avatar>
          }
          {information.text && 
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{information.text}</Typography>
            </Box>
          }
          <Box className={classes.imageBox}>
            {information.image.map(e => {
              return <Box className={`${classes.bubble} + ${classes.multiImages}`} key={e}><img src={e} alt="send success" /></Box>
            })}
          </Box>
            {other ? 
              <Typography className={classes.usernameDate}>
                {information.otherUser.username} {information.time}
              </Typography>
              :
              <Typography className={classes.date}>{information.time}</Typography>
            }
        </Box>
      ) : (
        <Box className={classes.root}>
          {other ? 
            <Box>
              <Avatar alt={information.otherUser.username} src={information.otherUser.photoUrl} className={classes.avatar}></Avatar>
              <Typography className={classes.usernameDate}>
                {information.otherUser.username} {information.time}
              </Typography>
            </Box>
            :
            <Typography className={classes.date}>{information.time}</Typography>
          }
            <Box className={classes.bubble}>
              {information.image && information.image.map(e => {return <img src={e} alt="send success" key={e} />})}
              {information.text && <Typography className={classes.text}>{information.text}</Typography>}
            </Box>
          </Box>
        )
      }
    </Box>
  )
};
