import axios from "api/axios";
import { formatDate } from "utils/date/formatDate";
import { IJob } from "types/job.types";

export const fetchJobs = () => {
  return axios.get("/jobs");
};

export const deleteJobs = (jobs: IJob[]) => {
  return jobs.forEach((job: IJob) => {
    axios.delete(`/jobs/${job.id}`);
  });
};

export const deleteJob = (id: number) => {
  return axios.delete(`/jobs/${id}`);
};

export const createJob = (
  title: string,
  companyName: string,
  shortDescription: string,
  longDescription: string,
  logo: string
) => {
  return axios.post(`/jobs`, {
    title,
    date: formatDate(new Date()),
    shortDescription,
    longDescription,
    logo,
    companyName,
  });
};
