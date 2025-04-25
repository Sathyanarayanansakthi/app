import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
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
    <main className="bg-gradient-to-l from-slate-950 to-slate-800 font-manrope min-h-screen">
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
    </main>
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
