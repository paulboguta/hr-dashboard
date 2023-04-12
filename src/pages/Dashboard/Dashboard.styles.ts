import styled from "styled-components";
import { GridBlock } from "../../components/GridBlock/GridBlock";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background.header};
  height: 100vh;
`;

export const WrapperMain = styled.div`
  display: flex;
  width: 100%;
`;

export const Grid = styled.div`
  max-width: 1100px;
  margin-top: 24px;
  display: grid;
  padding-inline: 32px;
  padding-block: 16px;
  grid-row-gap: 16px;
  grid-column-gap: 2%;

  @media (max-width: 1100px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
  @media (min-width: 1100px) {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const StyledGridBlockBig = styled(GridBlock)`
  padding-top: 16px;
`;
