import {
  createCandidate,
  fetchCandidates,
} from "features/candidates/candidates.service";
import { AppDispatch } from "store/store";
import { ActionType } from "store/types";
import { ICandidate } from "types/candidate.types";

export const getCandidates =
  (candidates: ICandidate[]) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionType.FETCHING_CANDIDATES,
      candidates,
    });
  };

export const createCandidateAction =
  (
    name: string,
    email: string,
    position: string,
    companyName: string,
    shortDescription: string,
    longDescription: string,
    logo: string
  ) =>
  async (dispatch: AppDispatch) => {
    const candidates = await fetchCandidates();
    dispatch({
      type: ActionType.CREATING_CANDIDATE,
      candidates: candidates.data,
    });
    await createCandidate(
      name,
      email,
      position,
      companyName,
      shortDescription,
      longDescription,
      logo
    );
    const newCandidates = await fetchCandidates();
    dispatch({
      type: ActionType.CREATING_CANDIDATE,
      candidates: newCandidates.data,
    });
  };

export const deleteCandidateAction = () => async (dispatch: AppDispatch) => {
  const candidates = await fetchCandidates();
  dispatch({
    type: ActionType.DELETING_CANDIDATE,
    candidates: candidates.data,
  });
};
