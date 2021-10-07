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
    MuiFormLabel: {
      root: {
        color: "#B0B0B0",
        marginTop: '-10px',
        '&.Mui-focused': {
          color: "#B0B0B0",
        }
      }
    },
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  }
});
