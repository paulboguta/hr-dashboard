import { GridColDef } from "@mui/x-data-grid";
import { ActionButtons } from "../../components/Tables/ActionButtons/ActionButtons";
import { useCandidatesTable } from "./useCandidatesTable";

export const useCandidatesColumns = () => {
  const { onClickOpen, onClickDeleteOneCandidate } = useCandidatesTable();
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 150,
    },
    {
      field: "position",
      headerName: "Position",
      minWidth: 150,
    },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      renderCell: (cell) => (
        <ActionButtons
          onClickOpen={() => onClickOpen(cell)}
          onClickDelete={() => onClickDeleteOneCandidate(cell)}
        />
      ),
      minWidth: 80,
    },
  ];

  const columnsMobile: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 90,
    },
    {
      field: "position",
      headerName: "Position",
      minWidth: 90,
    },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      renderCell: (cell) => (
        <ActionButtons
          onClickOpen={() => onClickOpen(cell)}
          onClickDelete={() => onClickDeleteOneCandidate(cell)}
        />
      ),
      minWidth: 30,
    },
  ];

  return { columns, columnsMobile };
};
