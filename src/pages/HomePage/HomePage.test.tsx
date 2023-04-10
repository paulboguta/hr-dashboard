import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Theme";
import { HomePage } from "./HomePage";

describe("test home page", () => {
  it("renders 2 buttons", () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <HomePage />
      </ThemeProvider>
      </BrowserRouter>
    );
    const buttonSignup = screen.getByText("Sign Up");
    const buttonSignin = screen.getByText("Sign In");
    expect(buttonSignin).toBeInTheDocument();
    expect(buttonSignup).toBeInTheDocument();
  });
  it("renders 1 heading", () => {
    render(
      <BrowserRouter>
       <ThemeProvider theme={lightTheme}>
        <HomePage />
       </ThemeProvider>
      </BrowserRouter>
    );
    const heading = screen.getByText("HR Analytics");
    expect(heading).toBeInTheDocument();
  });
});
