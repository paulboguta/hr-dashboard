/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { ICandidatesState } from "../../types/candidate.types";

const initialState = {
  candidates: [],
} as ICandidatesState;

export const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    getCandidates: (state, action) => {
      return { candidates: action.payload };
    },
    createCandidateAction: (state, action) => {
      return { candidates: action.payload };
    },
    deleteCandidateAction: (state, action) => {
      return { candidates: action.payload };
    },
  },
});

export const selectCandidate = (state: RootState) =>
  state.rootReducer.candidatesReducer.candidates;

export const { getCandidates, createCandidateAction, deleteCandidateAction } =
  candidatesSlice.actions;
