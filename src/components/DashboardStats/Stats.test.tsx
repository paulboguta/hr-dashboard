import { render, screen } from "@testing-library/react";
import { BsPerson } from "react-icons/bs";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Theme";
import { Stat } from "./Stat";
import { WrapperStats } from "./WrapperStats";

describe("test dashboard stats", () => {
  it("should render 3 icons", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <WrapperStats />
      </ThemeProvider>
    );
    const icons = screen.getAllByTestId("icon");
    expect(icons).toHaveLength(3);
  });
  it("should get number and title props and render it", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Stat
          icon={<BsPerson />}
          backgroundColor="#00e673"
          stat="854"
          title="Candidates"
        />
      </ThemeProvider>
    );
    const stat = screen.getByText("854");
    const title = screen.getByText("Candidates");
    expect(stat).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
