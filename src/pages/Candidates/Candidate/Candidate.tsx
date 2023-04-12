import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IModalNavProps } from "../../types/modal.types";
import { Header } from "../../../components/Header/Header";
import { Slider } from "../../../components/Slider/Slider";
import { usePathname } from "../../../hooks/hooks";
import {
  Wrapper,
  WrapperMain,
  H2,
  Logo,
  WrapperContent,
  ShortDesc,
  LongDesc,
} from "../../Jobs/Job/Job.styles";
import { RootState } from "../../../store/store";
import {
  Experience,
  Skills,
  WrapperCandidate,
  WrapperTopCandidate,
} from "./Candidate.styles";

type ICandidateProps = Pick<
  IModalNavProps,
  | "modalCreateOff"
  | "isShowingNavigation"
  | "navigationOff"
  | "navigationToggle"
>;

export const Candidate = ({
  modalCreateOff,
  isShowingNavigation,
  navigationOff,
  navigationToggle,
}: ICandidateProps) => {
  const [candidate, setCandidate] = useState({
    name: "",
    position: "",
    email: "",
    shortDescription: "",
    longDescription: "",
    logo: "",
    id: "",
    companyName: "",
  });
  const {
    name,
    position,
    email,
    shortDescription,
    longDescription,
    logo,
    id,
    companyName,
  } = useSelector(
    (state: RootState) => state.rootReducer.currentCandidateReducer
  );

  const currentID = usePathname().split("/").pop();

  useEffect(() => {
    setCandidate({
      name,
      position,
      email,
      shortDescription,
      longDescription,
      logo,
      id,
      companyName,
    });
  }, [
    companyName,
    currentID,
    email,
    id,
    logo,
    longDescription,
    name,
    position,
    shortDescription,
  ]);
  return (
    <Wrapper>
      <Header navigationToggle={navigationToggle} />
      <WrapperMain>
        <Slider
          modalCreateOff={modalCreateOff}
          isShowingNavigation={isShowingNavigation}
          navigationOff={navigationOff}
        />
        <WrapperCandidate>
          <WrapperTopCandidate>
            <H2>{candidate.name}</H2>
            <div>{candidate.position}</div>
          </WrapperTopCandidate>
          <hr />
          <WrapperContent>
            <Logo src={candidate.logo} />
            <Experience>
              <span>5 years of experience </span>
              <div>Currently working in {candidate.companyName}</div>
            </Experience>
            <ShortDesc>{candidate.shortDescription}</ShortDesc>
            <Skills>
              <div>Skills</div>
              <li>React</li>
              <li>Redux</li>
              <li>Typescript</li>
              <li>Nextjs</li>
              <li>Nodejs</li>
              <li>AWS</li>
            </Skills>
            <LongDesc>{candidate.longDescription}</LongDesc>
          </WrapperContent>
        </WrapperCandidate>
      </WrapperMain>
    </Wrapper>
  );
};
