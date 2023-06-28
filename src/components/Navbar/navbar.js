import React from "react";
import Sidebar from "./SideNavbar";
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Profile from "../../pages/Profile";
import TrainingGroup from "../../pages/TrainingGroup";
import TrainingSession from "../../pages/TrainingSession";
import Participants from "../../pages/Participants";
import FarmVisit from "../../pages/FarmVisit";
import BottomNavbar from "./BottomNavbar";
import ProjectListDropdown from "../ProjectDrop/ProjectListDropdown";
const Navbar = () => {
  const isMobile = window.innerWidth <= 600; // Adjust the breakpoint as per your needs
  // get current path
  const location = useLocation();

  return (
    <nav>
      {/* {
      isMobile ? <BottomNavbar /> : */}
      <Sidebar>
        {location.pathname !== "/profile" ? (
          <div className="page__container">
            <ProjectListDropdown />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/traingroup" element={<TrainingGroup />} />
              <Route path="/trainsession" element={<TrainingSession />} />
              <Route path="/participant" element={<Participants />} />
              <Route path="/farmvisit" element={<FarmVisit />} />
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
      </Sidebar>
    </nav>
  );
};

export default Navbar;
