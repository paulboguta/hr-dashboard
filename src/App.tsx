import { Route, Routes } from "react-router-dom";
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
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<Job />} />
      <Route path="/candidates" element={<Candidates />} />
      <Route path="/candidates/:id" element={<Candidate />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
