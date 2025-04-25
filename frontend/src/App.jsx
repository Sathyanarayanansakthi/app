import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { UserContextProvider } from "./context/UserContext";
import FeaturesGrid from "./pages/Featurespage";

// Axios defaults
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const AppContent = () => {
  const location = useLocation();

  // Hide Navbar on these routes
  const hideNavbarRoutes = ["/login", "/signup", "/dashboard"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="relative min-h-screen font-manrope bg-gradient-to-l from-slate-950 to-slate-800">
      {/* ✅ Global Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="h-full w-full relative">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 100 100"
                  fill="none"
                  stroke="oklch(44.6% 0.043 257.281)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      {/* ✅ Main content above the background */}
      <div className="relative z-10">
        {showNavbar && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <FeaturesGrid />
              </>
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <AppContent />
      </Router>
    </UserContextProvider>
  );
};

export default App;
