import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#fff",
    },
    primary: {
      main: "#d4e157",
      light: "#ffff89",
      dark: "#a0af22",
    },
    secondary: {
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b",
    },
  },
  typography: {
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: 18,
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "rgb(0,0,0)",
      },
    },
  },
});

export default Theme;
