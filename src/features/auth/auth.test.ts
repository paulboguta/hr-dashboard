import mockAxios from "jest-mock-axios";
import { signin, signup, getUserProfile } from "./auth.service";

afterEach(() => {
  mockAxios.reset();
});

describe("test auth api calls", () => {
  it("should send post request on login", () => {
    const catchFn = jest.fn();
    const thenFn = jest.fn();

    const username = "admin";
    const password = "123";

    signin(username, password).then(thenFn).catch(catchFn);

    expect(mockAxios.post).toHaveBeenCalledWith("/app/auth/login", {
      username,
      password,
    });

    expect(catchFn).not.toHaveBeenCalled();
  });
  it("should send post request on register", () => {
    const catchFn = jest.fn();
    const thenFn = jest.fn();

    const firstName = "Pawel";
    const lastName = "Boguta";
    const username = "admin";
    const password = "123";

    signup(firstName, lastName, username, password).then(thenFn).catch(catchFn);

    expect(mockAxios.post).toHaveBeenCalledWith("/app/auth/register", {
      firstName,
      lastName,
      username,
      password,
    });

    expect(catchFn).not.toHaveBeenCalled();
  });

  it("should send get request for user token", async () => {
    const catchFn = jest.fn();
    const thenFn = jest.fn();
    const mockToken = "mocktoken";
    getUserProfile(mockToken).then(thenFn).catch(catchFn);

    expect(mockAxios.get).toHaveBeenCalledWith("/app/profile", {
      headers: { Authorization: `Bearer ${mockToken}` },
    });
    expect(catchFn).not.toHaveBeenCalled();
  });
});
