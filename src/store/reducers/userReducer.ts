import { AnyAction } from "redux";
import { IUserState } from "../../types/user.types";
import { ActionType } from "../types";

const initialState: IUserState = {
  username: "",
  firstname: "",
  lastname: "",
  token: "",
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.LOGIN_USER: {
      return {
        username: action.username,
        firstname: action.firstname,
        lastname: action.lastname,
        token: action.token,
      };
    }

    case ActionType.REGISTER_USER: {
      return {
        username: action.username,
        firstname: action.firstname,
        lastname: action.lastname,
        token: action.token,
      };
    }

    case ActionType.LOGOUT_USER: {
      return {
        loading: action.loading,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
