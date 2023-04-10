import "styled-components";

declare module "styled-components" {
  export interface ILightTheme {
    background: {
      primary: string;
      header: string;
    };
    font: {
      primary: string;
      opposite: string;
    };
    buttons: {
      buttonHomePage: string;
    };
    slider: {
      hover: string;
    };
    boxShadow: {
      primary: string;
      secondary: string;
    };
  }
}
