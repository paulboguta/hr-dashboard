import { useMemo } from "react";
import { IconContext } from "react-icons";
import { AiOutlineEye } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 100%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

interface IActionButtonsProps {
  onClickOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export const ActionButtons = ({
  onClickOpen,
  onClickDelete,
}: IActionButtonsProps) => {
  const iconValues = useMemo(
    () => ({
      size: "22px",
    }),
    []
  );

  return (
    <Wrapper>
      <IconContext.Provider value={iconValues}>
        <Button onClick={onClickOpen}>
          <AiOutlineEye />
        </Button>
        <Button onClick={onClickDelete}>
          <BiTrashAlt />
        </Button>
      </IconContext.Provider>
    </Wrapper>
  );
};
