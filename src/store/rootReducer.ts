import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import jobsReducer from "./reducers/jobsReducer";
import currentJobReducer from "./reducers/currentJobReducer";
import candidatesReducer from "./reducers/candidatesReducer";
import currentCandidateReducer from "./reducers/currentCandidateReducer";

export const rootReducer = combineReducers({
  userReducer,
  jobsReducer,
  currentJobReducer,
  candidatesReducer,
  currentCandidateReducer,
});
