import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ICandidate } from "../../types/candidate.types";

export const useCandidates = () => {
  const [data, setData] = useState<ICandidate[]>([]);
  const { candidates } = useSelector(
    (state: RootState) => state.rootReducer.candidatesReducer
  );

  useEffect(() => {
    setData(Object.values(candidates));
  }, [candidates]);

  return { data };
};
