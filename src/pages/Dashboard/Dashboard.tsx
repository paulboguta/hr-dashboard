import { WrapperStats } from "../../components/DashboardStats/WrapperStats";
import { GridBlock } from "../../components/GridBlock/GridBlock";
import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";
import { IModalNavProps } from "../../types/modal.types";
import { useDashboard } from "../../hooks/useDashboard";
import {
  Wrapper,
  WrapperMain,
  Grid,
  StyledGridBlockBig,
} from "./Dashboard.styles";

type IDashboardProps = Pick<
  IModalNavProps,
  | "navigationToggle"
  | "modalCreateOff"
  | "isShowingNavigation"
  | "navigationOff"
>;

export const Dashboard = ({
  navigationToggle,
  modalCreateOff,
  isShowingNavigation,
  navigationOff,
}: IDashboardProps) => {
  const { jobsAmount, candidatesAmount, isLoadingJobs, isLoadingCandidates } =
    useDashboard();

  if (!isLoadingJobs && !isLoadingCandidates)
    return (
      <Wrapper>
        <Header navigationToggle={navigationToggle} />
        <WrapperMain>
          <Slider
            modalCreateOff={modalCreateOff}
            isShowingNavigation={isShowingNavigation}
            navigationOff={navigationOff}
          />
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
