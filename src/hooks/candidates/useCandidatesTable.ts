import { GridRenderCellParams, GridSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  requestSearchCandidates,
  selectRows,
} from "../../utils/table/tableUtils";
import { deleteJobAction } from "../../store/slices/jobsSlice";
import {
  deleteCandidate,
  deleteCandidates,
} from "../../features/candidates/candidates.service";
import { deleteCandidateAction } from "../../store/slices/candidatesSlice";
import { getCandidate } from "../../store/slices/currentCandidateSlice";
import { useAppDispatch } from "../../store/store";
import { ICandidate } from "../../types/candidate.types";
import { useCandidates } from "./useCandidates";

export const useCandidatesTable = () => {
  const [searchedData, setSearchedData] = useState<ICandidate[]>([]);
  const [pageSize, setPageSize] = useState<number>(5);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedRows, setSelectedRows] = useState<ICandidate[]>([]);
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data } = useCandidates();

  const onClickOpen = (cell: GridRenderCellParams) => {
    const thisCandidate = data.find((job) => job.id === cell.row.id);
    dispatch(getCandidate(thisCandidate));
    navigate(`/candidates/${cell.row.id}`);
  };

  const onClickDeleteOneCandidate = async (cell: GridRenderCellParams) => {
    await deleteCandidate(cell.row.id);
    const newCandidates = data.filter((job) => {
      return job.id !== cell.row.id;
    });
    dispatch(deleteCandidateAction(newCandidates));
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setSearchedData(requestSearchCandidates(event.target.value, data));
  };

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedValue(event.target.value);
  };

  const onClickDelete = () => {
    deleteCandidates(selectedRows);
    const newCandidates = data.filter((job) => {
      return !selectedRows.includes(job);
    });
    dispatch(deleteJobAction(newCandidates));
    setSelectedValue("Actions");
  };

  useEffect(() => {
    const tempArr: ICandidate[] = [];
    selectRows({ tempArr, data, selectionModel });
    setSelectedRows(tempArr);
  }, [data, selectionModel]);

  return {
    onClickDelete,
    onClickDeleteOneCandidate,
    onClickOpen,
    onChangeSearch,
    onChangeSelect,
    selectionModel,
    setSelectionModel,
    searchText,
    searchedData,
    selectedValue,
    data,
    pageSize,
    setPageSize,
  };
};
