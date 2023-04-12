import { AnyAction } from "redux";
import { ActionType } from "../types";
import { ICandidatesState } from "../../types/candidate.types";

const initialState: ICandidatesState = {
  candidates: [],
};

const candidatesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.FETCHING_CANDIDATES: {
      return { candidates: action.candidates };
    }
    case ActionType.CREATING_CANDIDATE: {
      return {
        candidates: action.candidates,
      };
    }
    case ActionType.DELETING_CANDIDATE: {
      return {
        candidates: action.candidates,
      };
    }
    default:
      return state;
  }
};

export default candidatesReducer;
