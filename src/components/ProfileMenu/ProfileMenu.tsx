import { BsPerson } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IModalNavProps } from "types/modal.types";
import { logoutUser } from "../../store/slices/userSlice";
import { RootState, useAppDispatch } from "../../store/store";
import { SliderLink } from "../Slider/SliderLinks/SliderLink";

interface IProfileMenuProps extends IModalNavProps {
  path: string;
}

const Wrapper = styled.div`
  width: 240px;
  z-index: 99;
  @media (min-width: 768px) {
    position: absolute;
    top: 68px;
    border-bottom-left-radius: 8px;
    right: -10px;
    padding: 10px;
    background-color: ${(props) => props.theme.background.primary};
    box-shadow: ${(props) => props.theme.boxShadow.primary};
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Name = styled.div`
  text-align: center;
  font-size: 24px;
`;

export const ProfileMenu = ({ path, navigationOff }: IProfileMenuProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    token: "",
  });
  const { firstname, lastname, token } = useSelector(
    (state: RootState) => state.rootReducer.userReducer
  );

  useEffect(() => {
    setUser({ fname: firstname, lname: lastname, token });
  }, [firstname, lastname, token]);

  const onClickNavigateToProfile = () => {
    navigate(user.token.length ? "/profile" : "/");
    navigationOff?.();
  };

  const onClickLogout = () => {
    dispatch(logoutUser());
    navigate("/");
    navigationOff?.();
  };

  return (
    <Wrapper>
      <Name>{`${user.fname} ${user.lname}`}</Name>
      <SliderLink
        text="Profile"
        active={path === "/profile"}
        onClick={onClickNavigateToProfile}
        profileMenu
      >
        <BsPerson />
      </SliderLink>
      <SliderLink
        text="Log out"
        active={path === "/"}
        onClick={onClickLogout}
        profileMenu
      >
        <AiOutlineLogout />
      </SliderLink>
    </Wrapper>
  );
};
