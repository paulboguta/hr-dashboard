import { createJob, fetchJobs } from "../../features/jobs/jobs.service";
import { AppDispatch } from "../store";
import { ActionType } from "../types";
import { IJob } from "../../types/job.types";

export const getJobs = (jobs: IJob[]) => async (dispatch: AppDispatch) => {
  dispatch({
    type: ActionType.FETCHING_JOBS,
    jobs,
  });
};

export const createJobAction =
  (
    title: string,
    companyName: string,
    shortDescription: string,
    longDescription: string,
    logo: string
  ) =>
  async (dispatch: AppDispatch) => {
    await createJob(
      title,
      companyName,
      shortDescription,
      longDescription,
      logo
    );
    const newJobs = await fetchJobs();
    dispatch({
      type: ActionType.CREATING_JOB,
      jobs: newJobs.data,
    });
  };

export const deleteJobAction = () => async (dispatch: AppDispatch) => {
  const jobs = await fetchJobs();
  dispatch({
    type: ActionType.DELETING_JOB,
    jobs: jobs.data,
  });
};
