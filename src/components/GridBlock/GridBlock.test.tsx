import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Theme";
import { GridBlock } from "./GridBlock";

describe("test gridblock", () => {
  it("should render given header and content", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <GridBlock title="Test" small>
          Example content
        </GridBlock>
      </ThemeProvider>
    );
    const header = screen.getByText("Test");
    const content = screen.getByText("Example content");
    expect(header).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
