import React from "react";
import backgroundImage from "../images/bg-img.png";
import bubbleIcon from "../images/bubble.svg";
import { Grid, Typography, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
    padding: "20% 10%",
    alignSelf: "center",
    [theme.breakpoints.up('sm')]: {
      width: "40%",
      left: "initial",
      padding: "10%",
    },
  },
  top: {
    width: "fit-content",
    alignItems: "center",
    position: "absolute",
    top: "4%",
    right: "4%",
  },
  topText: {
    display: "none",
    [theme.breakpoints.up('sm')]: {
      display: "block",
      fontSize: 15,
      paddingRight: 20,
      cursor: "default",
    }
  },
  topButton: {
    boxShadow: "0 0 8px rgba(0,0,0,0.2)",
    color: "#3A8DFF",
    width: 150,
    height: 50,
  },
  header: {
    fontSize: '5vh',
    fontWeight: 600,
    cursor: "default",
    marginBottom: 10,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      fontSize: '5.5vh',
    },
  },
  formControl: {
    width: "100%",
    marginBottom: "5%"
  },
  adornment: {
    color: "#3A8DFF",
  },
  bottomButton: {
    display: "block",
    color: "#FFF",
    boxShadow: "none",
    margin: "20px auto 0",
    width: 150,
    height: 55,
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
        style={{ width: "6vw", marginBottom: 50 }}
      />
      <Typography style={{ fontSize: "3vw", cursor: "default" }}>
        Converse with anyone
        <br />
        with any language
      </Typography>
    </Grid>
  )
};