import React from "react";
import backgroundImage from "../images/bg-img.png";
import bubbleIcon from "../images/bubble.svg";
import { Grid, Typography, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme, paddingValue) => ({
  root: {
    justifyContent: "space-around",
    height: "100vh",
    padding: 0,
  },
  sideImage: {
    display: "none",
    [theme.breakpoints.up('sm')]: {
      display: "inline-flex",
      flexDirection: "column",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "36%",
      padding: "0 2%",
      background: `linear-gradient(180deg, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), center/cover no-repeat url(${backgroundImage})`,
      color: '#FFF',
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  sideInteract: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    padding: "15% 10%",
    alignSelf: "center",
    [theme.breakpoints.up('sm')]: {
      width: "40%",
      left: "initial",
      padding: `${paddingValue}vh 10%`,
    },
  },
  top: {
    width: "fit-content",
    alignItems: "center",
    position: "absolute",
    top: "2%",
    right: "2%",
  },
  topText: {
    fontSize: 12,
    paddingRight: 20,
    cursor: "default",
  },
  topButton: {
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    color: "#3A8DFF",
    padding: "0 5vw",
    height: 50,
  },
  header: {
    fontSize: '5.5vh',
    fontWeight: 600,
    cursor: "default",
    marginTop: 40,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  inputs: {
    width: "100%",
    margin: "5% 0",
    '& label': {
      fontSize: 20,
    },
  },
  bottomButton: {
    display: "block",
    color: "#FFF",
    boxShadow: "none",
    margin: "20px auto 0",
    width: '30vw',
    height: 50,
    '&:hover': {
      background: "#6abaff",
    }
  }
}));

export const SideImage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.sideImage}>
      <img
        src={bubbleIcon}
        alt="Chat Bubble"
        style={{ width: "15%", marginBottom: 40 }}
      />
      <Typography style={{ fontSize: 30 }}>
        Converse with anyone
        <br />
        with any language
      </Typography>
    </Grid>
  )
};