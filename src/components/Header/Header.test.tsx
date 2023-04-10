import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Theme";
import { Header } from "./Header";

describe("test header", () => {
  it("should render 1 button (profile)", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Header />
      </ThemeProvider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("should render logo", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Header />
      </ThemeProvider>
    );
    const logo = screen.getByText("HR Analytics");
    expect(logo).toBeInTheDocument();
  });
});
