import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
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
    primary: { 
      main: "#3A8DFF",
      light: "#6abaff"
    },
    secondary: { main: "#B0B0B0" }
  }
});
