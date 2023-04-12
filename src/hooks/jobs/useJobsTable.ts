import { GridRenderCellParams, GridSelectionModel } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteJob, deleteJobs } from "../../features/jobs/jobs.service";
import { requestSearchJobs, selectRows } from "../../utils/table/tableUtils";
import { IJob } from "../../types/job.types";
import { useAppDispatch } from "../../store/store";
import { deleteJobAction } from "../../store/slices/jobsSlice";
import { getJob } from "../../store/slices/currentJobSlice";
import { useJobs } from "./useJobs";

export const useJobsTable = () => {
  const { data } = useJobs();
  const [searchedData, setSearchedData] = useState<IJob[]>([]);
  const [pageSize, setPageSize] = useState<number>(5);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedRows, setSelectedRows] = useState<IJob[]>([]);
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setSearchedData(requestSearchJobs(event.target.value, data));
  };

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedValue(event.target.value);
  };

  const onClickDelete = async () => {
    deleteJobs(selectedRows);
    const newJobs = data.filter((job) => {
      return !selectedRows.includes(job);
    });
    dispatch(deleteJobAction(newJobs));
    setSelectedValue("Actions");
  };

  const onClickOpen = (cell: GridRenderCellParams) => {
    const thisJob = data.find((job) => job.id === cell.row.id);
    dispatch(getJob(thisJob));
    navigate(`/jobs/${cell.row.id}`);
  };

  const onClickDeleteOneJob = async (cell: GridRenderCellParams) => {
    await deleteJob(cell.row.id);
    const newJobs = data.filter((job) => {
      return job.id !== cell.row.id;
    });
    dispatch(deleteJobAction(newJobs));
  };

  useEffect(() => {
    const tempArr: IJob[] = [];
    selectRows({ tempArr, data, selectionModel });
    setSelectedRows(tempArr);
  }, [data, selectionModel]);

  return {
    searchedData,
    pageSize,
    selectedValue,
    searchText,
    onChangeSearch,
    onChangeSelect,
    onClickDelete,
    selectionModel,
    onClickOpen,
    onClickDeleteOneJob,
    data,
    setPageSize,
    setSelectionModel,
  };
};
