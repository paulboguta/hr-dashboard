import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store/store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Theme";
import { Profile } from "./Profile";
import { ProfileData } from "./ProfileData";

describe("test profile page", () => {
  it("renders heading Profile", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <Profile />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
    const header = screen.getByText("Profile");
    expect(header).toBeInTheDocument();
  });
  it("renders content with a given data", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <ProfileData
              firstName="Pawel"
              lastName="Test"
              username="test@test.com"
            />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
    const fname = screen.getByText("Pawel");
    const lname = screen.getByText("Test");
    const username = screen.getByText("test@test.com");
    expect(fname).toBeInTheDocument();
    expect(lname).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });
});
