import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IJob } from "../../types/job.types";

export const useJobs = () => {
  const [data, setData] = useState<IJob[]>([]);
  const { jobs } = useSelector(
    (state: RootState) => state.rootReducer.jobsReducer
  );

  useEffect(() => {
    setData(Object.values(jobs));
  }, [jobs]);

  return { data };
};
