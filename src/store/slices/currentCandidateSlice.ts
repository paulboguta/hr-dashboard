/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { ICandidate } from "../../types/candidate.types";
import type { RootState } from "../store";

interface ICandidateState {
  candidate: ICandidate;
}

const initialState = {
  candidate: {
    name: "",
    position: "",
    email: "",
    shortDescription: "",
    longDescription: "",
    logo: "",
    companyName: "",
    id: 0,
  },
} as ICandidateState;

export const currentCandidateSlice = createSlice({
  name: "currentCandidate",
  initialState,
  reducers: {
    getCandidate: (state, action) => {
      return { candidate: action.payload };
    },
  },
});

export const selectCurrentCandidate = (state: RootState) =>
  state.rootReducer.currentCandidateReducer.candidate;

export const { getCandidate } = currentCandidateSlice.actions;
