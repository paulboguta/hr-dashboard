import { AnyAction } from "redux";
import { ActionType } from "store/types";
import { IJobsState } from "types/job.types";

const initialState: IJobsState = {
  jobs: [],
};

const jobsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.FETCHING_JOBS: {
      return { jobs: action.jobs };
    }
    case ActionType.CREATING_JOB: {
      return {
        jobs: action.jobs,
      };
    }
    case ActionType.DELETING_JOB: {
      return {
        jobs: action.jobs,
      };
    }
    default:
      return state;
  }
};

export default jobsReducer;
