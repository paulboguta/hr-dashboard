import { useMemo } from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";

export interface ISliderLinkProps {
  children?: React.ReactNode;
  text: string;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  profileMenu: boolean;
}

interface IWrapperStyledProps {
  active: boolean;
  profileMenu: boolean;
}

const WrapperLink = styled.button<IWrapperStyledProps>`
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

export const SliderLink = ({
  children,
  text,
  active,
  onClick,
  profileMenu,
}: ISliderLinkProps) => {
  const iconValues = useMemo(
    () => ({
      size: "32px",
    }),
    []
  );

  return (
    <WrapperLink profileMenu={profileMenu} active={active} onClick={onClick}>
      <IconContext.Provider value={iconValues}>{children}</IconContext.Provider>
      <div>{text}</div>
    </WrapperLink>
  );
};
