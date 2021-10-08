import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
      fontFamily: "'Montserrat', sans-serif",
    }
  },
  overrides: {
    MuiTypography: {
      colorTextSecondary: {
        color: "primary",
        cursor: "pointer",
        fontSize: 15,
      }
    },
    MuiFormLabel: {
      root: {
        color: "#B0B0B0",
        fontSize: 25,
        '&.Mui-focused': {
          color: "#B0B0B0",
          fontSize: 25,
        },
      }
    },
    MuiInput: {
      input: {
        fontWeight: "bold",
        paddingTop: "5%",
      },
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  }
});
