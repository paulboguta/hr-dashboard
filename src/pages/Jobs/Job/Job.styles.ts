import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background.header};
  height: 100vh;
`;
export const WrapperMain = styled.div`
  display: flex;
  width: 100%;
`;

export const WrapperJob = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  margin-top: 48px;
  margin-left: 16px;
  max-width: 1100px;
  width: 70%;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  display: flex;
  flex-direction: column;

  hr {
    opacity: 0.4;
    margin-inline: 4px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 4px;
`;
export const H2 = styled.h2``;
export const WrapperDateSalary = styled.div``;
export const DateSalaryFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  h4 {
    font-weight: 400;
    color: gray;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
  }
`;

export const WrapperContent = styled.div`
  position: relative;
  margin-left: 32px;
  margin-top: 16px;
`;
export const Logo = styled.img`
  max-width: 140px;
  position: absolute;
  right: 30px;
  top: 30px;
`;
export const ShortDesc = styled.div`
  margin-bottom: 20px;
  width: 40%;
`;
export const Requirements = styled.ul`
  div {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }

  li {
    margin-top: 8px;
  }
`;
export const LongDesc = styled.div`
  margin-block: 24px;
  font-size: 14px;
  width: 80%;
`;
