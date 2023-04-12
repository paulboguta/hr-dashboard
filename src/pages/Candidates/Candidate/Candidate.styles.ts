import styled from "styled-components";
import {
  Requirements,
  WrapperJob,
  WrapperTop,
} from "../../Jobs/Job/Job.styles";

export const WrapperCandidate = styled(WrapperJob)``;
export const WrapperTopCandidate = styled(WrapperTop)``;
export const Skills = styled(Requirements)``;
export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  span {
    font-weight: 700;
  }
  margin-block: 10px;
`;
