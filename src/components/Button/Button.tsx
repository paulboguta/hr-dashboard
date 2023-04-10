import styled from "styled-components";

interface IButtonProps extends HTMLButtonElement {
  text: string;
  onClick(): void;
  buttonBackground: string;
}

interface IButtonStyledProps {
  buttonBackground: string;
}

export const ButtonStyled = styled.button<IButtonStyledProps>`
  background-color: ${(props) => props.buttonBackground};
  color: ${(props) => props.theme.font.primary};
  border: none;
  cursor: pointer;
  width: 144px;
  height: 48px;
  border-radius: 8px;

  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
  }
`;

export const Button = ({ text, onClick, buttonBackground }: IButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} buttonBackground={buttonBackground}>
      {text}
    </ButtonStyled>
  );
};
