import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Theme";
import { ButtonStyled } from "./Button";

describe("test signup/signin button", () => {
  it("should render button with a given text", () => {
    const onClick = jest.fn();
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <ButtonStyled onClick={onClick} buttonBackground="red">
            Sign up
          </ButtonStyled>
        </ThemeProvider>
      </BrowserRouter>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("should handle click function", () => {
    const onClick = jest.fn();
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <ButtonStyled onClick={onClick} buttonBackground="red">
            Sign up
          </ButtonStyled>
        </ThemeProvider>
      </BrowserRouter>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
