import axios from "api/axios";
import { formatDate } from "utils/date/formatDate";
import { ICandidate } from "types/candidate.types";

export const fetchCandidates = () => {
  return axios.get("/candidates");
};

export const createCandidate = (
  name: string,
  email: string,
  position: string,
  companyName: string,
  shortDescription: string,
  longDescription: string,
  logo: string
) => {
  return axios.post(`/candidates`, {
    name,
    position,
    email,
    date: formatDate(new Date()),
    shortDescription,
    longDescription,
    logo,
    companyName,
  });
};

export const deleteCandidates = (candidates: ICandidate[]) => {
  return candidates.forEach((candidate: ICandidate) => {
    axios.delete(`/candidates/${candidate.id}`);
  });
};

export const deleteCandidate = (id: number) => {
  return axios.delete(`/candidates/${id}`);
};
