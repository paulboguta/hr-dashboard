import { useSelector } from "react-redux";
import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";
import { RootState } from "../../store/store";
import { ProfileData } from "./ProfileData";
import { selectUser } from "../../store/slices/userSlice";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background.header};
  height: 100vh;
`;



export const Profile = () => {
  const { username, firstname, lastname } = useSelector(
    selectUser
  );


return (
    <Wrapper>
      <Header />
      <Slider
        
      />
      <ProfileData
        firstName={username}
        lastName={firstname}
        username={lastname}
      />
    </Wrapper>
  );
};
