import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#e2e8f0",
      dark: "#94a3b8",
    },
    text: {
      primary: "#475569",
      secondary: "#5f6368",
    },
    background: {
      paper: "#f8fafc",
    },
  },
});
