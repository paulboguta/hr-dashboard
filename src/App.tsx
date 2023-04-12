import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store/store";
import { GlobalStyle } from "./styles/globalStyles";
import { Theme } from "./styles/Theme";
import { Candidate } from "./pages/Candidates/Candidate/Candidate";
import { Candidates } from "./pages/Candidates/Candidates";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { HomePage } from "./pages/HomePage/HomePage";
import { Job } from "./pages/Jobs/Job/Job";
import { Jobs } from "./pages/Jobs/Jobs";
import { Profile } from "./pages/Profile/Profile";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";

const App = () => {
  const [isShowingCreate, setIsShowingCreate] = useState<boolean>(false);
  const [isShowingNavigation, setIsShowingNavigation] =
    useState<boolean>(false);

  const modalCreateToggle = () => {
    setIsShowingCreate((prev) => !prev);
  };

  const modalCreateOff = () => {
    setIsShowingCreate(false);
  };

  const navigationToggle = () => {
    setIsShowingNavigation((prev) => !prev);
  };

  const navigationOff = () => {
    setIsShowingNavigation(false);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            isShowingNavigation={isShowingNavigation}
            navigationOff={navigationOff}
            navigationToggle={navigationToggle}
            modalCreateOff={modalCreateOff}
          />
        }
      />
      <Route
        path="/jobs"
        element={
          <Jobs
            isShowingCreate={isShowingCreate}
            modalCreateToggle={modalCreateToggle}
            modalCreateOff={modalCreateOff}
            isShowingNavigation={isShowingNavigation}
            navigationOff={navigationOff}
            navigationToggle={navigationToggle}
          />
        }
      />
      <Route
        path="/jobs/:id"
        element={
          <Job
            isShowingNavigation={isShowingNavigation}
            navigationOff={navigationOff}
            navigationToggle={navigationToggle}
            modalCreateOff={modalCreateOff}
          />
        }
      />
      <Route
        path="/candidates"
        element={
          <Candidates
            isShowingCreate={isShowingCreate}
            modalCreateToggle={modalCreateToggle}
            modalCreateOff={modalCreateOff}
            isShowingNavigation={isShowingNavigation}
            navigationOff={navigationOff}
            navigationToggle={navigationToggle}
          />
        }
      />
      <Route
        path="/candidates/:id"
        element={
          <Candidate
            isShowingNavigation={isShowingNavigation}
            navigationOff={navigationOff}
            navigationToggle={navigationToggle}
            modalCreateOff={modalCreateOff}
          />
        }
      />

      <Route
        path="/profile"
        element={
          <Profile
            isShowingNavigation={isShowingNavigation}
            navigationOff={navigationOff}
            navigationToggle={navigationToggle}
            modalCreateOff={modalCreateOff}
          />
        }
      />
    </Routes>
  );
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Theme>
          <GlobalStyle />
          <App />
        </Theme>
      </Provider>
    </BrowserRouter>
  );
};

export default AppWrapper;
