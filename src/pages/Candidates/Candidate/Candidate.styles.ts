import {
  Requirements,
  WrapperJob,
  WrapperTop,
} from "pages/Jobs/Job/Job.styles";
import styled from "styled-components";

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
