import styled from "styled-components";
import { HeaderStyled } from "pages/HomePage/HomePage.styles";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useMemo } from "react";
import { IModalNavProps } from "types/modal.types";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 32px;
  padding-block: 16px;
  background-color: ${(props) => props.theme.background.header};
  box-shadow: ${(props) => props.theme.boxShadow.primary};
`;
const ProfileNavigation = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Icon = styled(CgProfile)`
  color: ${(props) => props.theme.font.primary};
  &:hover {
    transition: 0.3s ease-in;
    opacity: ${(props) => (props.theme.font.primary === "#fff" ? 1 : 0.3)};
    color: ${(props) => props.theme.font.primary === "#fff" && "#000"};
  }
  &:active {
    transition: 0.1s ease-in;
    transform: scale(95%);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconMobile = styled(GiHamburgerMenu)`
  @media (min-width: 768px) {
    display: none;
  }
`;

type IHeaderProps = Pick<IModalNavProps, "navigationToggle">;

export const Header = ({ navigationToggle }: IHeaderProps) => {
  const iconValues = useMemo(
    () => ({
      size: "32px",
    }),
    []
  );

  return (
    <Wrapper>
      <HeaderStyled>HR Analytics</HeaderStyled>
      <ProfileNavigation onClick={navigationToggle}>
        <IconContext.Provider value={iconValues}>
          <Icon />
          <IconMobile />
        </IconContext.Provider>
      </ProfileNavigation>
    </Wrapper>
  );
};
