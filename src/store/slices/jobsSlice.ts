/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { IJobsState } from "../../types/job.types";

const initialState = {
  jobs: [],
} as IJobsState;

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    getJobs: (state, action) => {
      return { jobs: action.payload };
    },
    createJobAction: (state, action) => {
      return { jobs: action.payload };
    },
    deleteJobAction: (state, action) => {
      return { jobs: action.payload };
    },
  },
});

export const selectJobs = (state: RootState) =>
  state.rootReducer.jobsReducer.jobs;

export const { getJobs, createJobAction, deleteJobAction } = jobsSlice.actions;
