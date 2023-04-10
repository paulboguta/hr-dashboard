import axios from "api/axios";

export const signup = (
  firstName: FormDataEntryValue | null,
  lastName: FormDataEntryValue | null,
  username: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) => {
  return axios.post("/app/auth/register", {
    firstName,
    lastName,
    username,
    password,
  });
};

export const signin = (
  username: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) => {
  return axios.post("/app/auth/login", {
    username,
    password,
  });
};

export const getUserProfile = (token: string) => {
  return axios.get("/app/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
