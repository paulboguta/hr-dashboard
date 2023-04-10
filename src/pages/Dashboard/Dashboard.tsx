import { WrapperStats } from "components/DashboardStats/WrapperStats";
import { GridBlock } from "components/GridBlock/GridBlock";
import { Header } from "components/Header/Header";
import { Slider } from "components/Slider/Slider";
import { fetchCandidates } from "features/candidates/candidates.service";
import { fetchJobs } from "features/jobs/jobs.service";
import { useAppDispatch } from "hooks/hooks";
import { useEffect, useState } from "react";
import { getCandidates } from "store/actions/candidatesActions";
import { getJobs } from "store/actions/jobsActions";
import { IModalNavProps } from "types/modal.types";
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
  const dispatch = useAppDispatch();
  const [jobsAmount, setJobsAmount] = useState(0);
  const [candidatesAmount, setCandidatesAmount] = useState(0);

  // jobs
  useEffect(() => {
    const fetchJobsData = async () => {
      const result = await fetchJobs();
      setJobsAmount(Object.values(result.data).length);
      dispatch(getJobs(result.data));
    };
    fetchJobsData();
  }, [dispatch]);

  // candidates
  useEffect(() => {
    const fetchCandidatesData = async () => {
      const result = await fetchCandidates();
      setCandidatesAmount(Object.values(result.data).length);
      console.log(Object.values(result.data));
      dispatch(getCandidates(result.data));
    };
    fetchCandidatesData();
  }, [dispatch]);

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
};
