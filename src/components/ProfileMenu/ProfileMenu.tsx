import { BsPerson } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "../../hooks/hooks";
import { useModals } from "../../hooks/useModals";
import { logoutUser, selectUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store/store";
import { SliderLink } from "../Slider/SliderLinks/SliderLink";

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

export const ProfileMenu = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    token: "",
  });
  const { firstname, lastname, token } = useSelector(selectUser);
  const path = usePathname();
  const { hideNav } = useModals();

  useEffect(() => {
    setUser({ fname: firstname, lname: lastname, token });
  }, [firstname, lastname, token]);

  const onClickNavigateToProfile = () => {
    navigate(user.token.length ? "/profile" : "/");
  };

  const onClickLogout = () => {
    dispatch(logoutUser(""));
    navigate("/");
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
