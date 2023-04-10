import { ButtonStyled } from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import {
  WrapperPage,
  WrapperContent,
  WrapperButtons,
  HeaderStyled,
} from "./HomePage.styles";

export const HomePage = () => {
  const navigate = useNavigate();

  const onClickMoveToSignUp = () => {
    navigate("/signup");
  };

  const onClickMoveToSignIn = () => {
    navigate("/signin");
  };

  return (
    <WrapperPage>
      <WrapperContent>
        <HeaderStyled>HR Analytics</HeaderStyled>
        <WrapperButtons>
          <ButtonStyled
            onClick={onClickMoveToSignUp}
            buttonBackground="#dd7973"
          >
            Sign Up
          </ButtonStyled>
          <ButtonStyled
            onClick={onClickMoveToSignIn}
            buttonBackground="#dd7973"
          >
            Sign In
          </ButtonStyled>
        </WrapperButtons>
      </WrapperContent>
    </WrapperPage>
  );
};
