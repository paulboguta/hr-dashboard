import React from "react";
import { ILightTheme, ThemeProvider } from "styled-components";

interface IThemeProps {
  children: React.ReactNode;
}

export const lightTheme: ILightTheme = {
  background: {
    primary: "#fff",
    header: "#e9eff4",
  },
  font: {
    primary: "#000",
    opposite: "#fff",
  },
  buttons: {
    buttonHomePage: "#dd7973",
  },
  slider: {
    hover: "#D2DAFF", // night:AAC4FF
  },
  boxShadow: {
    primary: "0px 9px 27px -21px rgba(66, 68, 90, 1);",
    secondary: "0px 0px 13px -7px rgba(66, 68, 90, 1);",
  },
};

export const Theme: React.FC<IThemeProps> = ({ children }) => {
  const theme = lightTheme; // later switch between light/dark theme

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
