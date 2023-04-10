import { AppDispatch } from "store/store";
import { ActionType } from "store/types";
import { IJob } from "types/job.types";

export const getCurrentJob = (job: IJob) => async (dispatch: AppDispatch) => {
  dispatch({
    type: ActionType.GET_CURRENT_JOB,
    title: job.title,
    date: job.date,
    shortDescription: job.shortDescription,
    longDescription: job.longDescription,
    logo: job.logo,
    companyName: job.companyName,
    id: job.id,
  });
};
