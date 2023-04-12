import { useSelector } from "react-redux";
import styled from "styled-components";
import { IModalNavProps } from "../../types/modal.types";
import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";
import { RootState } from "../../store/store";
import { ProfileData } from "./ProfileData";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background.header};
  height: 100vh;
`;

type IProfileProps = Pick<
  IModalNavProps,
  | "navigationToggle"
  | "modalCreateOff"
  | "isShowingNavigation"
  | "navigationOff"
>;

export const Profile = ({
  navigationToggle,
  modalCreateOff,
  isShowingNavigation,
  navigationOff,
}: IProfileProps) => {
  const { username, firstname, lastname, loading } = useSelector(
    (state: RootState) => state.rootReducer.userReducer
  );

  return loading ? (
    <p>Is loading...</p>
  ) : (
    <Wrapper>
      <Header navigationToggle={navigationToggle} />
      <Slider
        modalCreateOff={modalCreateOff}
        isShowingNavigation={isShowingNavigation}
        navigationOff={navigationOff}
      />
      <ProfileData
        firstName={username}
        lastName={firstname}
        username={lastname}
      />
    </Wrapper>
  );
};
