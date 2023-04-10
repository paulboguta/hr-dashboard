import styled from "styled-components";

interface IInputProps {
  gridArea: string;
}

interface IWrapperProps {
  type: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  position: absolute;
  top: 25%;
  right: 50%;
  transform: translate(50%, -50%);
  max-width: 900px;
  height: ${(props) => (props.type === "jobs" ? "300px" : "400px")};
  background-color: ${(props) => props.theme.background.primary};
  box-shadow: ${(props) => props.theme.boxShadow.secondary};
  border-radius: 12px;
  z-index: 99;

  @media (max-width: 1100px) {
    right: 40%;
    top: 30%;
  }
  @media (max-width: 900px) {
    height: ${(props) => (props.type === "jobs" ? "450px" : "550px")};
    right: 50%;
    top: ${(props) => (props.type === "jobs" ? "25%" : "45%")};
  }
`;

export const WrapperForm = styled.form`
  display: flex;
  gap: 16px;
  padding: 24px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

export const Input = styled.input<IInputProps>`
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 300px;
  padding-left: 10px;
  box-shadow: 0 0 5pt 0.2pt #d3d3d3;
  margin-bottom: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 5pt 0.2pt #d3d3d3;
  padding-left: 10px;
  padding-top: 10px;
  resize: none;

  @media (max-width: 900px) {
    height: 100px;
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  width: 50%;
  height: 40px;
  width: 240px;
  background-color: #5371ff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  font-weight: 700;

  &:hover {
    transition: 0.3s ease-in;
    transform: scale(105%);
    opacity: 0.9;
  }

  &:active {
    transition: 0.1s ease-in;
    transform: scale(100%);
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const WrapperSide = styled.div`
  display: flex;
  flex-direction: column;
`;
