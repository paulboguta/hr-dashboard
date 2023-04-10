import { AnyAction } from "redux";
import { ActionType } from "store/types";
import { ICandidate } from "types/candidate.types";

const initialState: ICandidate = {
  name: "",
  position: "",
  email: "",
  shortDescription: "",
  longDescription: "",
  logo: "",
  companyName: "",
  id: 0,
};

const currentCandidateReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.GET_CURRENT_CANDIDATE: {
      return {
        name: action.name,
        position: action.position,
        email: action.email,
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

export default currentCandidateReducer;
