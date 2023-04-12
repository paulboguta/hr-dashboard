/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { IJob } from "../../types/job.types";
import type { RootState } from "../store";

interface IJobState {
  job: IJob;
}

const initialState = {
  job: {
    title: "",
    date: "",
    shortDescription: "",
    longDescription: "",
    logo: "",
    companyName: "",
    id: 0,
  },
} as IJobState;

export const currentJobSlice = createSlice({
  name: "currentJob",
  initialState,
  reducers: {
    getJob: (state, action) => {
      return { job: action.payload };
    },
  },
});

export const selectCurrentJob = (state: RootState) =>
  state.rootReducer.currentJobReducer.job;

export const { getJob } = currentJobSlice.actions;
