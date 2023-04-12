import mockAxios from "jest-mock-axios";
import { formatDate } from "../../utils/date/formatDate";
import {
  createCandidate,
  deleteCandidate,
  fetchCandidates,
} from "./candidates.service";

afterEach(() => {
  mockAxios.reset();
});

describe("test auth api calls", () => {
  it("should send get request to get candidates", () => {
    const catchFn = jest.fn();
    const thenFn = jest.fn();

    fetchCandidates().then(thenFn).catch(catchFn);

    expect(mockAxios.get).toHaveBeenCalledWith("/candidates");
    expect(catchFn).not.toHaveBeenCalled();
  });
  it("should send post request to create candidate", () => {
    const catchFn = jest.fn();
    const thenFn = jest.fn();

    const mockCandidate = {
      name: "mock",
      email: "mock",
      position: "mock",
      companyName: "mock",
      shortDescription: "mock",
      longDescription: "mock",
      logo: "mock",
    };

    createCandidate(
      mockCandidate.name,
      mockCandidate.email,
      mockCandidate.position,
      mockCandidate.companyName,
      mockCandidate.longDescription,
      mockCandidate.shortDescription,
      mockCandidate.logo
    )
      .then(thenFn)
      .catch(catchFn);

    expect(mockAxios.post).toHaveBeenCalledWith("/candidates", {
      name: mockCandidate.name,
      email: mockCandidate.email,
      position: mockCandidate.position,
      companyName: mockCandidate.companyName,
      longDescription: mockCandidate.longDescription,
      shortDescription: mockCandidate.shortDescription,
      logo: mockCandidate.logo,
      date: formatDate(new Date()),
    });
    expect(catchFn).not.toHaveBeenCalled();
  });
  it("should send delete request to delete candidate", () => {
    const catchFn = jest.fn();
    const thenFn = jest.fn();
    const mockID = 1;
    deleteCandidate(mockID).then(thenFn).catch(catchFn);
    expect(mockAxios.delete).toHaveBeenCalledWith(`/candidates/${mockID}`);
  });
});
