export interface IJob {
  title?: string;
  date?: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  companyName: string;
  id: number;
}

export interface IJobsState {
  jobs: IJob[];
}
