import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store/store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Theme";
import { SliderLink } from "./SliderLinks/SliderLink";
import { SliderLinksWrapper } from "./SliderLinks/SliderLinksWrapper";

describe("test slider", () => {
  it("should render 4 buttons", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <SliderLinksWrapper
              modalCreateOff={() => {}}
              navigationOff={() => {}}
            />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
  });
  describe("test slider link", () => {
    it("should render given text", () => {
      const onClick = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
              <SliderLink
                text="Test Text"
                onClick={onClick}
                active
                profileMenu={false}
              >
                children
              </SliderLink>
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const text = screen.getByText("Test Text");
      expect(text).toBeInTheDocument();
    });
    it("should handle onclick", () => {
      const onClick = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
              <SliderLink
                text="Test Text"
                onClick={onClick}
                active
                profileMenu={false}
              >
                children
              </SliderLink>
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const link = screen.getByText("Test Text");
      fireEvent.click(link);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
