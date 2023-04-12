import { WrapperStats } from "../../components/DashboardStats/WrapperStats";
import { GridBlock } from "../../components/GridBlock/GridBlock";
import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";
import { useDashboard } from "../../hooks/useDashboard";
import {
  Wrapper,
  WrapperMain,
  Grid,
  StyledGridBlockBig,
} from "./Dashboard.styles";

export const Dashboard = () => {
  const { jobsAmount, candidatesAmount, isLoadingJobs, isLoadingCandidates } =
    useDashboard();

  if (!isLoadingJobs && !isLoadingCandidates)
    return (
      <Wrapper>
        <Header  />
        <WrapperMain>
          <Slider />
          <Grid>
            <GridBlock title="Open positions" small>
              {jobsAmount}
            </GridBlock>
            <GridBlock title="Candidates" small>
              {candidatesAmount}
            </GridBlock>
            <StyledGridBlockBig title="General" small={false}>
              <WrapperStats />
            </StyledGridBlockBig>
          </Grid>
        </WrapperMain>
      </Wrapper>
    );
  return <Wrapper>Loading...</Wrapper>;
};
