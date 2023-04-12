import { GridRenderCellParams, GridSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  requestSearchCandidates,
  selectRows,
} from "../../utils/table/tableUtils";
import { deleteJobs } from "../../features/jobs/jobs.service";
import { deleteJobAction } from "../../store/actions/jobsActions";
import { deleteCandidate } from "../../features/candidates/candidates.service";
import { deleteCandidateAction } from "../../store/actions/candidatesActions";
import { getCurrentCandidate } from "../../store/actions/currentCandidateActions";
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
    dispatch(getCurrentCandidate(cell.row));
    navigate(`/candidates/${cell.row.id}`);
  };

  const onClickDeleteOneCandidate = async (cell: GridRenderCellParams) => {
    await deleteCandidate(cell.row.id);
    dispatch(deleteCandidateAction());
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
    deleteJobs(selectedRows);
    dispatch(deleteJobAction());
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
