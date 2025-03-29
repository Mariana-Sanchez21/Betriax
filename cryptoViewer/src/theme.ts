import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#205781",
    },
    secondary: {
      main: "#4F959D",
    },
    success: {
      main: "#98D2C0",
    },
    background: {
      default: "#F6F8D5",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h4: {
      fontWeight: 700,
      color: "#205781",
    },
    body1: {
      fontWeight: 500,
      color: "#333",
    },
  },
});

export default theme;
