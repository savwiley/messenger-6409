import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import backgroundImage from "./images/bg-img.png";
import bubbleIcon from "./images/bubble.svg";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  makeStyles,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";

const useStyles = makeStyles((theme) => ({
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
    fontFamily: "'Open Sans', sans-serif",
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
      padding: "18vh 10%",
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
    color: "#BBB",
    fontSize: 12,
    paddingRight: 20,
    cursor: "default",
  },
  topButton: {
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    color: "#3A8DFF",
    fontFamily: "'Montserrat', sans-serif",
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
  bottomButton: {
    display: "block",
    background: "#3A8DFF",
    color: "#FFF",
    boxShadow: "none",
    fontFamily: "'Montserrat', sans-serif",
    margin: "20px auto 0",
    width: '30vw',
    height: 50,
    '&:hover': {
      background: "#6abaff",
    }
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={classes.root}>
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
      <Box className={classes.sideInteract}>
        <Grid container item className={classes.top}>
          <Typography className={classes.topText}>
            Already have an account?
          </Typography>
          <Button
            onClick={() => history.push("/login")}
            className={classes.topButton}
          >
            Login
          </Button>
        </Grid>
        <form onSubmit={handleRegister}>
          <Grid>
            <Typography className={classes.header}>Create an account.</Typography>
            <Grid>
              <FormControl margin="normal" style={{ width: "100%" }} required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl margin="normal" style={{ width: "100%" }} required>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                margin="normal"
                style={{ width: "100%" }}
                required
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                />
                <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                margin="normal"
                style={{ width: "100%" }}
                required
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                />
                <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
              </FormControl>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.bottomButton}
            >
              Create
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
