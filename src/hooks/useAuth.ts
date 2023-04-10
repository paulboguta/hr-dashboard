import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SigninSchema, SignupSchema } from "../features/validation/validation";
import { useAppDispatch } from "../store/store";
import { signup, signin } from "../features/auth/auth.service";
import { loginUser, registerUser } from "../store/actions/userActions";

export const useAuth = () => {
  const [userExists, setUserExists] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formikSignUp = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async ({ firstName, lastName, email, password }) => {
      try {
        const response = await signup(firstName, lastName, email, password);
        if (response.data) {
          const loginResponse = await signin(email, password);
          dispatch(registerUser(loginResponse.data.access_token));
          navigate("/dashboard");
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  const formikSignIn = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: async ({ email, password }) => {
      try {
        const response = await signin(email, password);
        dispatch(loginUser(response.data.access_token));
        navigate("/dashboard");
      } catch (e) {
        setUserExists(false);
      }
    },
  });

  return { formikSignIn, formikSignUp, userExists };
};
