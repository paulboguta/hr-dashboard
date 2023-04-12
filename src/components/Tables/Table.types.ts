import { GridColDef } from "@mui/x-data-grid";
import { ICandidate } from "types/candidate.types";
import { IJob } from "types/job.types";

export interface IJobsTableProps {
  columns: GridColDef[];
  data: IJob[];
}

export interface ICandidateTableProps {
  columns: GridColDef[];
  data: ICandidate[];
}
