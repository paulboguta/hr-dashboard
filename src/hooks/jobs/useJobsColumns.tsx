import { GridColDef } from "@mui/x-data-grid";
import { ActionButtons } from "../../components/Tables/ActionButtons/ActionButtons";
import { useJobsTable } from "./useJobsTable";

export const useJobsColumns = () => {
  const { onClickOpen, onClickDeleteOneJob } = useJobsTable();
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "First name",
      minWidth: 200,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 100,
    },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      renderCell: (cell) => (
        <ActionButtons
          onClickOpen={() => onClickOpen(cell)}
          onClickDelete={() => onClickDeleteOneJob(cell)}
        />
      ),
      minWidth: 80,
    },
  ];

  const columnsMobile: GridColDef[] = [
    {
      field: "title",
      headerName: "First name",
      minWidth: 140,
    },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      renderCell: (cell) => (
        <ActionButtons
          onClickOpen={() => onClickOpen(cell)}
          onClickDelete={() => onClickDeleteOneJob(cell)}
        />
      ),
      minWidth: 40,
    },
  ];

  return { columns, columnsMobile };
};
