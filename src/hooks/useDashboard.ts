import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchCandidates } from "../features/candidates/candidates.service";
import { fetchJobs } from "../features/jobs/jobs.service";
import { getCandidates } from "../store/slices/candidatesSlice";
import { getJobs } from "../store/slices/jobsSlice";
import { useAppDispatch } from "../store/store";

export const useDashboard = () => {
  const dispatch = useAppDispatch();
  const [jobsAmount, setJobsAmount] = useState(0);
  const [candidatesAmount, setCandidatesAmount] = useState(0);
  const { data: jobsData, isLoading: isLoadingJobs } = useQuery(
    "jobs",
    fetchJobs
  );

  const { data: candidatesData, isLoading: isLoadingCandidates } = useQuery(
    "user",
    fetchCandidates
  );

  useEffect(() => {
    if (jobsData) {
      dispatch(getJobs(jobsData.data));
      setJobsAmount(Object.values(jobsData.data).length);
    }
    if (candidatesData) {
      dispatch(getCandidates(candidatesData.data));
      setCandidatesAmount(Object.values(candidatesData.data).length);
    }
  }, [jobsData, candidatesData]);

  return {
    jobsData,
    isLoadingJobs,
    jobsAmount,
    candidatesData,
    isLoadingCandidates,
    candidatesAmount,
  };
};
