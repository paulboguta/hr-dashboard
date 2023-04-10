import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export const WrapperTable = styled.div`
  height: 500px;
  max-width: 1000px;
  width: 90%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-inline: 30px;
  }
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledDataGrid = styled(DataGrid)`
  background-color: white;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
`;
export const WrapperActionsSearch = styled.div`
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
`;

export const Select = styled.select`
  height: 30px;
  width: 90px;
  margin-left: 20px;
  padding-left: 8px;
  opacity: 0.4;
  border-radius: 8px;
`;
export const Search = styled.input`
  height: 30px;
  width: 160px;
  padding-left: 8px;
  opacity: 0.4;
  border: solid 1px #818181;
  border-radius: 8px;

  @media (max-width: 480px) {
    width: 100px;
  }
`;

export const AddJobCandidateButton = styled.button`
  margin-left: auto;
  margin-right: 30px;
  height: 30px;
  width: 140px;
  background-color: #5371ff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  font-weight: 700;

  @media (max-width: 768px) {
    position: absolute;
    top: 12%;
    left: 5%;
    z-index: 3;
    width: 140px;
    display: none;
  }

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

export const AddJobCandidateButtonMobile = styled(AddJobCandidateButton)`
  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DeleteButton = styled.button`
  height: 30px;
  width: 140px;
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
