import styled from "styled-components";

interface IWrapperStyledProps {
  active: boolean;
  profileMenu: boolean;
}

interface IWrapperProps {
  navigationClicked: boolean | undefined;
}

export const Wrapper = styled.div<IWrapperProps>`
  height: 100%;
  width: 240px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media (max-width: 768px) {
    position: absolute;
    top: 68px;
    right: 0;
    background-color: ${(props) =>
      props.navigationClicked ? props.theme.background.primary : "transparent"};
    box-shadow: ${(props) =>
      props.navigationClicked && props.theme.boxShadow.primary};
    height: 430px;
  }
  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const WrapperLink = styled.button<IWrapperStyledProps>`
  background-color: ${(props) =>
    props.active ? props.theme.slider.hover : "transparent"};
  border: none;
  cursor: pointer;
  margin-top: 8px;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 32px;
  gap: 18px;

  div {
    font-size: 20px;
    font-weight: 200;
  }

  &:hover {
    background-color: ${(props) => props.theme.slider.hover};
    transition: 0.4s ease-in;
  }

  &:active {
    transition: 0.1s ease-in;
    transform: scale(101%);
  }

  @media (min-width: 768px) {
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
  }

  border-top-right-radius: ${(props) => props.profileMenu && "0px"} !important;
  border-bottom-right-radius: ${(props) =>
    props.profileMenu && "0px"} !important;
  border-top-left-radius: ${(props) => props.profileMenu && "0px"} !important;
  border-bottom-left-radius: ${(props) =>
    props.profileMenu && "0px"} !important;
`;
