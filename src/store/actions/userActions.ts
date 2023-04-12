import { getUserProfile } from "../../features/auth/auth.service";
import { AppDispatch } from "../store";
import { ActionType } from "../types";

export const loginUser =
  (response: string) => async (dispatch: AppDispatch) => {
    const user = await getUserProfile(response);
    dispatch({
      type: ActionType.LOGIN_USER,
      firstname: user.data.firstname,
      lastname: user.data.lastname,
      username: user.data.username,
      token: response,
    });
  };

export const registerUser =
  (response: string) => async (dispatch: AppDispatch) => {
    const user = await getUserProfile(response);
    dispatch({
      type: ActionType.REGISTER_USER,
      firstname: user.data.firstname,
      lastname: user.data.lastname,
      username: user.data.username,
      token: response,
    });
  };

export const logoutUser = () => (dispatch: AppDispatch) => {
  dispatch({
    type: ActionType.LOGOUT_USER,
  });
};
