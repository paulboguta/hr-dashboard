import { useSelector } from "react-redux";
import { selectCurrentCandidate } from "../../../store/slices/currentCandidateSlice";
import { Header } from "../../../components/Header/Header";
import { Slider } from "../../../components/Slider/Slider";
import {
  Wrapper,
  WrapperMain,
  H2,
  Logo,
  WrapperContent,
  ShortDesc,
  LongDesc,
} from "../../Jobs/Job/Job.styles";
import {
  Experience,
  Skills,
  WrapperCandidate,
  WrapperTopCandidate,
} from "./Candidate.styles";

export const Candidate = () => {
  const {
    name,
    position,
    shortDescription,
    longDescription,
    logo,
    companyName,
  } = useSelector(selectCurrentCandidate);

  return (
    <Wrapper>
      <Header />
      <WrapperMain>
        <Slider
          
        />
        <WrapperCandidate>
          <WrapperTopCandidate>
            <H2>{name}</H2>
            <div>{position}</div>
          </WrapperTopCandidate>
          <hr />
          <WrapperContent>
            <Logo src={logo} />
            <Experience>
              <span>5 years of experience </span>
              <div>Currently working in {companyName}</div>
            </Experience>
            <ShortDesc>{shortDescription}</ShortDesc>
            <Skills>
              <div>Skills</div>
              <li>React</li>
              <li>Redux</li>
              <li>Typescript</li>
              <li>Nextjs</li>
              <li>Nodejs</li>
              <li>AWS</li>
            </Skills>
            <LongDesc>{longDescription}</LongDesc>
          </WrapperContent>
        </WrapperCandidate>
      </WrapperMain>
    </Wrapper>
  );
};
