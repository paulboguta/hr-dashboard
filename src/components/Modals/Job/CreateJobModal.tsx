import { useFormik } from "formik";
import { useAppDispatch } from "hooks/hooks";
import { useMemo } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { createJobAction } from "store/actions/jobsActions";
import { IModalNavProps } from "types/modal.types";
import {
  ButtonClose,
  Header,
  Input,
  SubmitButton,
  TextArea,
  Wrapper,
  WrapperForm,
  WrapperSide,
} from "../CreateOfferCandidate.styles";

type ICreateJobModalProps = Pick<IModalNavProps, "modalCreateToggle">;

export const CreateJobModal = ({ modalCreateToggle }: ICreateJobModalProps) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      shortDescription: "",
      longDescription: "",
      logo: "",
      companyName: "",
      position: "",
      email: "",
    },
    onSubmit: (values) => {
      dispatch(
        createJobAction(
          values.title,
          values.companyName,
          values.shortDescription,
          values.longDescription,
          values.logo
        )
      );
      modalCreateToggle?.();
    },
  });

  const iconValue = useMemo(
    () => ({
      size: "24px",
    }),
    []
  );

  return (
    <Wrapper type="jobs">
      <ButtonClose onClick={modalCreateToggle}>
        <IconContext.Provider value={iconValue}>
          <AiOutlineClose />
        </IconContext.Provider>
      </ButtonClose>
      <Header>Add Job Offer</Header>
      <WrapperForm onSubmit={formik.handleSubmit}>
        <WrapperSide>
          <Input
            placeholder="Job Title"
            gridArea="2 / 1 / 3 / 2"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <Input
            placeholder="Company Name"
            gridArea="3 / 1 / 4 / 2"
            id="companyName"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
          />
          <Input
            placeholder="Logo url"
            gridArea="4 / 1 / 5 / 2"
            id="logo"
            name="logo"
            value={formik.values.logo}
            onChange={formik.handleChange}
          />
        </WrapperSide>
        <WrapperSide>
          <Input
            placeholder="Short description"
            gridArea="2 / 2 / 3 / 3"
            id="shortDescription"
            name="shortDescription"
            value={formik.values.shortDescription}
            onChange={formik.handleChange}
          />
          <TextArea
            placeholder="Long description"
            id="longDescription"
            name="longDescription"
            value={formik.values.longDescription}
            onChange={formik.handleChange}
          />
        </WrapperSide>
        <SubmitButton type="submit">Submit</SubmitButton>
      </WrapperForm>
    </Wrapper>
  );
};
