import { GridRowId, GridSelectionModel } from "@mui/x-data-grid";
import { ICandidate } from "types/candidate.types";
import { IJob } from "types/job.types";

export const requestSearchJobs = (searchValue: string, rows: IJob[]) => {
  const filteredRows = rows.filter((row: IJob) => {
    return row.title?.toLowerCase().includes(searchValue.toLowerCase());
  });
  return filteredRows;
};

export const requestSearchCandidates = (
  searchValue: string,
  rows: ICandidate[]
) => {
  const filteredRows = rows.filter((row: ICandidate) => {
    return row.name?.toLowerCase().includes(searchValue.toLowerCase());
  });
  return filteredRows;
};

interface ISelectProps {
  tempArr: IJob[] | ICandidate[];
  data: IJob[] | ICandidate[];
  selectionModel: GridSelectionModel;
}

export const selectRows = ({ tempArr, data, selectionModel }: ISelectProps) => {
  data.forEach((row, idx) => {
    // for each row in dataset check if row is selected and push it to an array
    selectionModel?.forEach((gridRowId: GridRowId) => {
      if (idx + 1 === gridRowId) {
        tempArr.push(row);
      }
    });
  });
};
