import mockAxios from "jest-mock-axios";
import { formatDate } from "utils/date/formatDate";
import { createJob, deleteJob, fetchJobs } from "./jobs.service";

afterEach(() => {
  mockAxios.reset();
});

describe("test auth api calls", () => {
  it("should send get request to get jobs", () => {
    const catchFn = jest.fn();
    const thenFn = jest.fn();

    fetchJobs().then(thenFn).catch(catchFn);

    expect(mockAxios.get).toHaveBeenCalledWith("/jobs");
    expect(catchFn).not.toHaveBeenCalled();
  });
  it("should send post request to create job", () => {
    const catchFn = jest.fn();
    const thenFn = jest.fn();

    const mockJob = {
      title: "mock",
      companyName: "mock",
      shortDescription: "mock",
      longDescription: "mock",
      logo: "mock",
    };

    createJob(
      mockJob.title,
      mockJob.companyName,
      mockJob.longDescription,
      mockJob.shortDescription,
      mockJob.logo
    )
      .then(thenFn)
      .catch(catchFn);

    expect(mockAxios.post).toHaveBeenCalledWith("/jobs", {
      title: mockJob.title,
      companyName: mockJob.companyName,
      longDescription: mockJob.longDescription,
      shortDescription: mockJob.shortDescription,
      logo: mockJob.logo,
      date: formatDate(new Date()),
    });
    expect(catchFn).not.toHaveBeenCalled();
  });
  it("should send delete request to delete job", () => {
    const catchFn = jest.fn();
    const thenFn = jest.fn();
    const mockID = 1;
    deleteJob(mockID).then(thenFn).catch(catchFn);
    expect(mockAxios.delete).toHaveBeenCalledWith(`/jobs/${mockID}`);
  });
});
