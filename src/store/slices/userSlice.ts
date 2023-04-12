/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { IUserState as IUser } from "../../types/user.types";

interface IUserState {
  user: IUser;
}

const initialState = {
  user: {
    firstname: "",
    lastname: "",
    username: "",
    token: "",
  },
} as IUserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return {
        user: {
          firstname: action.payload.user.firstname,
          lastname: action.payload.user.lastname,
          username: action.payload.user.username,
          token: action.payload.token,
        },
      };
    },
    registerUser: (state, action) => {
      return {
        user: {
          firstname: action.payload.user.firstname,
          lastname: action.payload.user.lastname,
          username: action.payload.user.username,
          token: action.payload.token,
        },
      };
    },
    logoutUser: (state, action) => {
      return {
        user: {
          firstname: "",
          lastname: "",
          username: "",
          token: "",
        },
      };
    },
  },
});

export const selectUser = (state: RootState) =>
  state.rootReducer.userReducer.user;

export const { loginUser, registerUser, logoutUser } = userSlice.actions;
