import { combineReducers } from "redux";
import { jobsSlice } from "./slices/jobsSlice";
import { userSlice } from "./slices/userSlice";
import { candidatesSlice } from "./slices/candidatesSlice";
import { currentJobSlice } from "./slices/currentJobSlice";
import { currentCandidateSlice } from "./slices/currentCandidateSlice";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  jobsReducer: jobsSlice.reducer,
  currentJobReducer: currentJobSlice.reducer,
  candidatesReducer: candidatesSlice.reducer,
  currentCandidateReducer: currentCandidateSlice.reducer,
});
