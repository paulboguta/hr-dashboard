import { AnyAction } from "redux";
import { ActionType } from "../types";
import { IJob } from "../../types/job.types";

const initialState: IJob = {
  title: "",
  date: "",
  shortDescription: "",
  longDescription: "",
  logo: "",
  companyName: "",
  id: 0,
};

const currentJobReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.GET_CURRENT_JOB: {
      return {
        title: action.title,
        date: action.date,
        shortDescription: action.shortDescription,
        longDescription: action.longDescription,
        logo: action.logo,
        companyName: action.companyName,
        id: action.id,
      };
    }
    default:
      return state;
  }
};

export default currentJobReducer;
