import React, { useState, useEffect } from "react";
import Sidebar from "./SideNavbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Profile from "../../pages/Profile";
import TrainingGroup from "../../pages/TrainingGroup";
import TrainingSession from "../../pages/TrainingSession";
import Participants from "../../pages/Participants";
import FarmVisit from "../../pages/FarmVisit";
import BottomNavbar from "./BottomNavbar";
import ProjectListDropdown from "../ProjectDrop/ProjectListDropdown";
import { GET_ALL_PROJECTS } from "../../graphql/queries/projectsRequests";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const isMobile = window.innerWidth <= 600; // Adjust the breakpoint as per your needs
  // get current path
  const location = useLocation();
  const [projects, setProjects] = useState([]); // eslint-disable-line no-unused-vars
  const { data, error, loading } = useQuery(GET_ALL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState("");
  const favProject = localStorage.getItem("fav_project");

  useEffect(() => {
    if (data) {
      setProjects(data.getProjects.projects);
    }

    if (error) {
      toast.error(error.message);
    }
  }, [data, error]);

  useEffect(() => {
    if (favProject) {
      setSelectedProject(favProject);
    }
  }, [favProject]);

  return (
    <nav>
      {/* {
      isMobile ? <BottomNavbar /> : */}
      <Sidebar>
        {location.pathname !== "/profile" ? (
          <div className="page__container">
            {!loading && (
              <ProjectListDropdown
                projects={projects}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            )}
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
