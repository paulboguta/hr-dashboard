import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Helvetica', sans-serif;
        height: 100vh;
        overflow: hidden;
    }
    
    textarea{
        font-family: 'Helvetica', sans-serif;
    }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
`;

export const Desktop = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;
