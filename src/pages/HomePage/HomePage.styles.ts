import styled from "styled-components";

export const WrapperPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 220px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeaderStyled = styled.h1`
  color: ${(props) => props.theme.font.primary};
`;
