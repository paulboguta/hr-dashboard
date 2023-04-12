import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../../components/Header/Header";
import { Slider } from "../../../components/Slider/Slider";
import { usePathname } from "../../../hooks/hooks";
import { RootState } from "../../../store/store";
import { IModalNavProps } from "../../../types/modal.types";
import { Wrapper, WrapperMain } from "../Jobs.styles";
import {
  DateSalaryFlex,
  H2,
  Logo,
  LongDesc,
  Requirements,
  ShortDesc,
  WrapperContent,
  WrapperDateSalary,
  WrapperJob,
  WrapperTop,
} from "./Job.styles";

type IJobProps = Pick<
  IModalNavProps,
  | "navigationOff"
  | "navigationToggle"
  | "isShowingNavigation"
  | "modalCreateOff"
>;

export const Job = ({
  navigationToggle,
  modalCreateOff,
  isShowingNavigation,
  navigationOff,
}: IJobProps) => {
  const [job, setJob] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    logo: "",
    id: "",
    date: "",
    companyName: "",
  });
  const {
    title,
    shortDescription,
    longDescription,
    logo,
    id,
    date,
    companyName,
  } = useSelector((state: RootState) => state.rootReducer.currentJobReducer);
  const currentID = usePathname().split("/").pop();

  useEffect(() => {
    setJob({
      title,
      shortDescription,
      longDescription,
      logo,
      id,
      date,
      companyName,
    });
  }, [
    companyName,
    currentID,
    date,
    id,
    logo,
    longDescription,
    shortDescription,
    title,
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
        <WrapperJob>
          <WrapperTop>
            <H2>{job.title}</H2>
            <WrapperDateSalary>
              <DateSalaryFlex>
                <h4>Date:</h4>
                <h3>{job.date}</h3>
              </DateSalaryFlex>
              <DateSalaryFlex>
                <h4>Salary:</h4>
                <h3>12.000 - 16.000 PLN</h3>
              </DateSalaryFlex>
            </WrapperDateSalary>
          </WrapperTop>
          <hr />
          <WrapperContent>
            <Logo src={job.logo} />
            <ShortDesc>{job.shortDescription}</ShortDesc>
            <Requirements>
              <div>Requirements</div>
              <li>React</li>
              <li>Redux</li>
              <li>Typescript</li>
              <li>Nextjs</li>
              <li>Nodejs</li>
              <li>AWS</li>
            </Requirements>
            <LongDesc>{job.longDescription}</LongDesc>
          </WrapperContent>
        </WrapperJob>
      </WrapperMain>
    </Wrapper>
  );
};
