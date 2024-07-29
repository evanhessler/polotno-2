import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import * as colors from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

// Define your theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.indigo[500],
    },
    secondary: {
      main: "#8861e8",
    },
    background: {
      default: colors.grey[100],
      paper: colors.grey[50],
    },
    default: {
      main: colors.indigo[500],
    },
    text: {
      primary: "#000",
      secondary: "rgba(0, 0, 0, 0.7)",
    },
  },
  typography: {
    h1: {
      fontFamily: '"PuviBold", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: "clamp(3.75rem, 5vw, 0.8rem)",
      color: "#000",
    },
    h6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 100,
      textTransform: "uppercase",
      fontSize: "clamp(0.75rem, 5vw, 1.2rem)",
      color: "#000",
    },
    fontSize: 18,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "#root": {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            "& > *": {
              flexShrink: 0,
            },
          },
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
