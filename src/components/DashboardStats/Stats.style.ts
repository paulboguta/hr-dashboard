import styled from "styled-components";

interface IBackgroundProps {
  backgroundColor: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Growth = styled.div`
  span {
    font-weight: 700;
  }
  font-weight: 400;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1100px) {
    width: 200%;
  }

  @media (max-width: 1100px) {
    width: 80%;
    justify-content: flex-start;
    gap: 16px;
  }
`;

export const StatWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatText = styled.div`
  span {
    font-size: 14px;
    font-weight: 400;
    color: gray;
  }
  div {
    font-weight: 700;
    font-size: 20px;
  }
`;

export const Background = styled.div<IBackgroundProps>`
  background-color: ${(props) => props.backgroundColor};
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
