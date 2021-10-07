import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useStyles, SideImage } from "./themes/forms.js";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";

const Login = (props) => {
  const classes = useStyles(18);
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
      <SideImage />
      <Box className={classes.sideInteract}>
        <Grid container item className={classes.top}>
          <Typography className={classes.topText} color="secondary">
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
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
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
