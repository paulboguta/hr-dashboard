import axios from "../../api/axios";
import { formatDate } from "../../utils/date/formatDate";
import { ICandidate } from "../../types/candidate.types";

export const fetchCandidates = () => {
  return axios.get("/candidates");
};

export const createCandidate = async (
  name: string,
  email: string,
  position: string,
  companyName: string,
  shortDescription: string,
  longDescription: string,
  logo: string
) => {
  await axios.post(`/candidates`, {
    name,
    position,
    email,
    date: formatDate(new Date()),
    shortDescription,
    longDescription,
    logo,
    companyName,
  });

  const candidates = await fetchCandidates();
  return candidates.data;
};

export const deleteCandidates = (candidates: ICandidate[]) => {
  return candidates.forEach((candidate: ICandidate) => {
    axios.delete(`/candidates/${candidate.id}`);
  });
};

export const deleteCandidate = (id: number) => {
  return axios.delete(`/candidates/${id}`);
};
