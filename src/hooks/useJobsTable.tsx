// import {
//   GridColDef,
//   GridRenderCellParams,
//   GridSelectionModel,
// } from "@mui/x-data-grid";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { deleteJob, deleteJobs } from "../features/jobs/jobs.service";
// import { requestSearchJobs } from "../utils/table/tableUtils";
// import { IJob } from "../types/job.types";
// import { useAppDispatch } from "../store/store";
// import { deleteJobAction } from "../store/actions/jobsActions";
// import { getCurrentJob } from "../store/actions/currentJobActions";
// import { ActionButtons } from "../components/Tables/ActionButtons/ActionButtons";

// export const useJobsTable = () => {
//   const [searchedData, setSearchedData] = useState<IJob[]>([]);
//   const [pageSize, setPageSize] = useState<number>(5);
//   const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
//   const [searchText, setSearchText] = useState<string>("");
//   const [selectedRows, setSelectedRows] = useState<IJob[]>([]);
//   const [selectedValue, setSelectedValue] = useState("");
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(event.target.value);
//     setSearchedData(requestSearchJobs(event.target.value, data));
//   };

//   const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     event.preventDefault();
//     setSelectedValue(event.target.value);
//   };

//   const onClickDelete = () => {
//     deleteJobs(selectedRows);
//     dispatch(deleteJobAction());
//     setSelectedValue("Actions");
//   };

//   const onClickOpen = (cell: GridRenderCellParams) => {
//     dispatch(getCurrentJob(cell.row));
//     navigate(`/jobs/${cell.row.id}`);
//   };

//   const onClickDeleteOneJob = async (cell: GridRenderCellParams) => {
//     await deleteJob(cell.row.id);
//     dispatch(deleteJobAction());
//   };

//   const columns: GridColDef[] = [
//     {
//       field: "title",
//       headerName: "First name",
//       minWidth: 200,
//     },
//     {
//       field: "date",
//       headerName: "Date",
//       minWidth: 100,
//     },
//     {
//       field: "",
//       headerName: "Action",
//       sortable: false,
//       renderCell: (cell) => (
//         <ActionButtons
//           onClickOpen={() => onClickOpen(cell)}
//           onClickDelete={() => onClickDeleteOneJob(cell)}
//         />
//       ),
//       minWidth: 80,
//     },
//   ];

//   const columnsMobile: GridColDef[] = [
//     {
//       field: "title",
//       headerName: "First name",
//       minWidth: 140,
//     },
//     {
//       field: "",
//       headerName: "Action",
//       sortable: false,
//       renderCell: (cell) => (
//         <ActionButtons
//           onClickOpen={() => onClickOpen(cell)}
//           onClickDelete={() => onClickDeleteOneJob(cell)}
//         />
//       ),
//       minWidth: 40,
//     },
//   ];

//   useEffect(() => {
//     const tempArr: IJob[] = [];
//     selectRows({ tempArr, data, selectionModel });
//     setSelectedRows(tempArr);
//   }, [data, selectionModel]);
// };
