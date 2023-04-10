import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store/store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Theme";
import { ProfileMenu } from "./ProfileMenu";

describe("test profile menu", () => {
  it("should render 2 buttons", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <ProfileMenu path="" />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });
});
