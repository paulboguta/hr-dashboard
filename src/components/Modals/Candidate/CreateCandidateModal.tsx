import { useFormik } from "formik";
import { useMemo } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import {
  createCandidate,
  fetchCandidates,
} from "../../../features/candidates/candidates.service";
import { useAppDispatch } from "../../../store/store";
import { createCandidateAction } from "../../../store/slices/candidatesSlice";
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

interface ICreateCandidateModalProps {
  modalCreateToggle: () => void;
}

export const CreateCandidateModal = ({
  modalCreateToggle,
}: ICreateCandidateModalProps) => {
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
    onSubmit: async ({
      title,
      position,
      email,
      shortDescription,
      longDescription,
      logo,
      companyName,
    }) => {
      await createCandidate(
        title,
        position,
        email,
        shortDescription,
        longDescription,
        logo,
        companyName
      );
      const newCandidates = await fetchCandidates();
      dispatch(createCandidateAction(newCandidates.data));
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
    <Wrapper type="candidates">
      <ButtonClose onClick={modalCreateToggle}>
        <IconContext.Provider value={iconValue}>
          <AiOutlineClose />
        </IconContext.Provider>
      </ButtonClose>
      <Header>Add Candidate</Header>
      <WrapperForm onSubmit={formik.handleSubmit}>
        <WrapperSide>
          <Input
            placeholder="Name"
            gridArea="2 / 1 / 3 / 2"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <Input
            placeholder="Email"
            gridArea="2 / 1 / 3 / 2"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            placeholder="Position"
            gridArea="2 / 1 / 3 / 2"
            id="position"
            name="position"
            value={formik.values.position}
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
            placeholder="Short Description"
            gridArea="2 / 2 / 3 / 3"
            id="shortDescription"
            name="shortDescription"
            value={formik.values.shortDescription}
            onChange={formik.handleChange}
          />
          <TextArea
            placeholder="Long Description"
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
