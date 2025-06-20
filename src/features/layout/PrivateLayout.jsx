import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProjectListDropdown from "../../components/ProjectDrop/ProjectListDropdown";
import FocusAreaSelector from "../../components/ProjectDrop/FocusAreaSelector";
import ProgramListDropdown from "../../components/ProjectDrop/ProgramListDropdown";
import { useAuth } from "../../context/useAuth";
import { useNavbarData } from "./hooks/useNavbarData";
import LoadingScreen from "../../components/LoadingScreen";
import { Toaster } from "react-hot-toast";
import SustainabilitySidebar from "../../components/Sidebar/SustainabilitySidebar";

const PrivateLayout = () => {
  const auth = useAuth();

  const [focusArea, setFocusArea] = useState(
    localStorage.getItem("active_focus_area") || "agronomy"
  );

  const [program, setProgram] = useState(
    localStorage.getItem("active_program") || "Ethiopia Regrow USDA"
  );

  const {
    projects,
    activeProject,
    setActiveProject,
    trainingGroups,
    trainingSessions,
    filteredGroups,
    setFilteredGroups,
    filteredSessions,
    setFilteredSessions,
    filter,
    setFilter,
    wetmills,
    projectStats,
    loading,
  } = useNavbarData(auth.user, focusArea, program);

  useEffect(() => {
    localStorage.setItem("active_program", program);
  }, [program]);

  if (!auth.user || loading) return <LoadingScreen />;

  const LayoutSidebar =
    focusArea === "agronomy" ? Sidebar : SustainabilitySidebar;

  return (
    <LayoutSidebar>
      <div className="page__container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <FocusAreaSelector value={focusArea} onChange={setFocusArea} />

          {focusArea === "agronomy" ? (
            <ProjectListDropdown
              projects={projects}
              selectedProject={activeProject}
              setSelectedProject={setActiveProject}
              setFilteredGroups={setFilteredGroups}
            />
          ) : (
            <ProgramListDropdown
              programs={["Burundi USDA", "Ethiopia Regrow USDA", "Ethiopia Nespresso", "Ethiopia CREW GAC"]}
              // onChange={setProgram}
              selectedProgram={program}
              setSelectedProgram={setProgram}
            />
          )}
        </div>

        <Outlet
          context={{
            projects,
            activeProject,
            trainingGroups,
            trainingSessions,
            projectStats,
            filteredGroups,
            setFilteredGroups,
            filteredSessions,
            setFilteredSessions,
            filter,
            setFilter,
            userId: auth.user.id,
            program,
            wetmills,
            setProgram,
          }}
        />
      </div>
      <Toaster position="top-right" />
    </LayoutSidebar>
  );
};

export default PrivateLayout;
