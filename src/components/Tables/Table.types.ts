import { GridColDef } from "@mui/x-data-grid";
import { ICandidate } from "types/candidate.types";
import { IJob } from "types/job.types";
import { IModalNavProps } from "types/modal.types";

export interface IJobsTableProps extends IModalNavProps {
  columns: GridColDef[];
  data: IJob[];
}

export interface ICandidateTableProps extends IModalNavProps {
  columns: GridColDef[];
  data: ICandidate[];
}
