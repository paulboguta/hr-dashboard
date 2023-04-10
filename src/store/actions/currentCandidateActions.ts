import { AppDispatch } from "store/store";
import { ActionType } from "store/types";
import { ICandidate } from "types/candidate.types";

export const getCurrentCandidate =
  (candidate: ICandidate) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionType.GET_CURRENT_CANDIDATE,
      name: candidate.name,
      position: candidate.position,
      email: candidate.email,
      shortDescription: candidate.shortDescription,
      longDescription: candidate.longDescription,
      logo: candidate.logo,
      companyName: candidate.companyName,
      id: candidate.id,
    });
  };
