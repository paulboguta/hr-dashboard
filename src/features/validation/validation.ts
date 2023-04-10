import * as Yup from "yup";

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please enter email"),
  password: Yup.string().min(5, "Too short!").required("Please enter password"),
});

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter First Name"),
  lastName: Yup.string().required("Please enter Last Name"),
  email: Yup.string().email("Invalid email").required("Please enter email"),
  password: Yup.string().min(5, "Too Short!").required("Please enter password"),
  passwordConfirm: Yup.string().required("Please enter password confirmation"),
});
