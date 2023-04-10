import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "store/store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Theme";
import { CreateCandidateModal } from "./Candidate/CreateCandidateModal";
import { CreateJobModal } from "./Job/CreateJobModal";

describe("test create modals", () => {
  describe("test create job modal", () => {
    it("should render 4 inputs and 1 text area", () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <Provider store={store}>
            <CreateJobModal />
          </Provider>
        </ThemeProvider>
      );
      const inputs = screen.getAllByRole("textbox");
      expect(inputs).toHaveLength(5);
    });
    it("should render 2 buttons (close and submit)", () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <Provider store={store}>
            <CreateJobModal />
          </Provider>
        </ThemeProvider>
      );
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(2);
    });
  });

  describe("test add candidate modal", () => {
    it("should render 6 inputs and 1 text area", () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <Provider store={store}>
            <CreateCandidateModal />
          </Provider>
        </ThemeProvider>
      );
      const inputs = screen.getAllByRole("textbox");
      expect(inputs).toHaveLength(7);
    });
    it("should render 2 buttons (close and submit)", () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <Provider store={store}>
            <CreateCandidateModal />
          </Provider>
        </ThemeProvider>
      );
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(2);
    });
  });
});
