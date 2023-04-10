export interface ICandidate {
  name?: string;
  position?: string;
  email?: string;
  id: number;
  shortDescription: string;
  longDescription: string;
  logo: string;
  companyName: string;
}

export interface ICandidatesState {
  candidates: ICandidate[];
}
