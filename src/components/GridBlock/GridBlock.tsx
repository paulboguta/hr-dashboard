import styled from "styled-components";

interface IGridBlockProps {
  title: string;
  small: boolean;
  children: React.ReactNode;
}

interface IWrapperProps {
  small: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  background-color: ${(props) => props.theme.background.primary};
  height: 160px;
  width: ${(props) => (props.small ? "100%" : "204%")};
  box-shadow: ${(props) => props.theme.boxShadow.secondary};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 32px;

  @media (max-width: 1100px) {
    width: 100%;
    align-items: center;
  }

  /* @media (min-width: 1440px) {
    max-width: ${(props) => (props.small ? "500px" : "1100px")};
  } */

  h2 {
    font-weight: 500;
    font-size: 20px;
  }
`;

const WrapperChildren = styled.div`
  display: flex;
  align-items: flex-start;

  font-size: 24px;
  font-weight: 700;
  margin-top: 32px;
`;

export const GridBlock = ({ title, small, children }: IGridBlockProps) => {
  return (
    <Wrapper small={small}>
      <h2>{title}</h2>
      <WrapperChildren>{children}</WrapperChildren>
    </Wrapper>
  );
};
