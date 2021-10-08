import React from "react";
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
  InputAdornment,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
            Don't have an account?
          </Typography>
          <Button
            onClick={() => history.push("/register")}
            className={classes.topButton}
          >
            Create account
          </Button>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid>
            <Typography className={classes.header}>Welcome back!</Typography>
            <Grid>
              <FormControl margin="normal" className={classes.formControl} required>
                <TextField
                  aria-label="e-mail address"
                  label="E-mail address"
                  name="email"
                  type="email"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" className={classes.formControl} required>
              <TextField
                label="Password"
                aria-label="password"
                type="password"
                name="password"
                InputProps={{
                  endAdornment: <InputAdornment position="end" className={classes.adornment}>Forgot?</InputAdornment>
                }}
              />
            </FormControl>
            <Grid>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                className={classes.bottomButton}
              >
                Login
              </Button>
            </Grid>
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
