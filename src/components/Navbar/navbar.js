import React, { useState, useEffect } from "react";
import Sidebar from "./SideNavbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Profile from "../../pages/Profile";
import TrainingGroup from "../../pages/TrainingGroup";
import TrainingSession from "../../pages/TrainingSession";
import Participants from "../../pages/Participants";
import FarmVisit from "../../pages/FarmVisit";
import { BeatLoader } from "react-spinners";
import ProjectListDropdown from "../ProjectDrop/ProjectListDropdown";
import { GET_ASSIGNED_PROJECTS } from "../../graphql/queries/projectsRequests";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { GET_TRAINING_GROUPS_PER_PROJECT } from "../../graphql/queries/trainingGroupsRequests";
import Tgdetail from "../../features/tgdetail.js/Tgdetail";
import { Grid } from "@mui/material";
import { GET_TRAINING_SESSIONS_PER_PROJECT } from "../../graphql/queries/trainingSessionsRequests";

const Navbar = () => {
  if (localStorage.getItem("myPimaUserData") === null) {
    window.location.href = "/login";
  }

  // get current path
  const location = useLocation();
  const [projects, setProjects] = useState([]); // eslint-disable-line no-unused-vars
  const [trainingGroups, setTrainingGroups] = useState([]); // eslint-disable-line no-unused-vars
  const [trainingSessions, setTrainingSessions] = useState([]); // eslint-disable-line no-unused-vars
  const { data, error, loading } = useQuery(GET_ASSIGNED_PROJECTS, {
    variables: {
      userId: JSON.parse(localStorage.getItem("myPimaUserData")).id,
    },
  });
  const [selectedProject, setSelectedProject] = useState("");
  const favProject = localStorage.getItem("fav_project");

  const trainingGroupsPerProject = useQuery(GET_TRAINING_GROUPS_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });

  const trainingSessionsPerProject = useQuery(
    GET_TRAINING_SESSIONS_PER_PROJECT,
    {
      variables: { sfProjectId: selectedProject },
    }
  );

  const [filter, setFilter] = useState({
    businessAdvisor: "",
    farmerTrainer: "",
    trainingGroup: "",
  });
  const [filteredGroups, setFilteredGroups] = useState([]); // eslint-disable-line no-unused-vars

  useEffect(() => {
    if (data) {
      setProjects(data.getProjectsAssigned.projects);
      data.getProjectsAssigned.projects.length > 0 &&
        setSelectedProject(data.getProjectsAssigned.projects[0].sf_project_id);
    }

    if (error) {
      toast.error(error.message);
    }
  }, [data, error]);

  useEffect(() => {
    if (favProject) {
      setSelectedProject(favProject);
    }

    if (trainingGroupsPerProject.data) {
      setTrainingGroups(
        trainingGroupsPerProject.data.trainingGroupsByProject.trainingGroups
      );
    }

    if (trainingSessionsPerProject.data) {
      setTrainingSessions(
        trainingSessionsPerProject.data.trainingSessionsByProject
          .trainingSessions
      );
    }
  }, [
    favProject,
    trainingGroupsPerProject.data,
    trainingSessionsPerProject.data,
  ]);

  return (
    <nav>
      <Sidebar>
        {!loading && projects.length > 0 ? (
          <>
            {location.pathname !== "/profile" ? (
              <div className="page__container">
                {!loading && (
                  <ProjectListDropdown
                    projects={projects}
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                    setFilteredGroups={setFilteredGroups}
                  />
                )}

                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/traingroup"
                    element={
                      !trainingGroupsPerProject.loading ? (
                        <TrainingGroup
                          trainingGroups={
                            filteredGroups.length > 0
                              ? filteredGroups
                              : trainingGroups
                          }
                          selectedProject={selectedProject}
                          filter={filter}
                          setFilter={setFilter}
                          setFilteredGroups={setFilteredGroups}
                        />
                      ) : (
                        <BeatLoader
                          color="#0D3C61"
                          size={15}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        />
                      )
                    }
                  />
                  <Route
                    path="/traingroup/:id"
                    element={<Tgdetail trainingGroups={trainingGroups} />}
                  />

                  <Route
                    path="/trainsession"
                    element={
                      !trainingSessionsPerProject.loading ? (
                        <TrainingSession
                          trainingSessions={trainingSessions}
                          selectedProject={selectedProject}
                        />
                      ) : (
                        <BeatLoader
                          color="#0D3C61"
                          size={15}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        />
                      )
                    }
                  />
                  <Route path="/participant" element={<Participants />} />
                  <Route path="/farmvisit" element={<FarmVisit />} />
                </Routes>
              </div>
            ) : (
              <Routes>
                <Route path="/profile" element={<Profile />} />
              </Routes>
            )}
          </>
        ) : (
          // no projects assigned
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: "100vh" }}
          >
            <Grid item>
              <em style={{ color: "#0D3C61" }}>No Projects Assigned</em>
            </Grid>
          </Grid>
        )}
      </Sidebar>
    </nav>
  );
};

export default Navbar;
