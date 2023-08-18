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
import {
  GET_ASSIGNED_PROJECTS,
  GET_PROJECT_STATISTICS,
} from "../../graphql/queries/projectsRequests";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { GET_TRAINING_GROUPS_PER_PROJECT } from "../../graphql/queries/trainingGroupsRequests";
import Tgdetail from "../../features/tgdetail.js/Tgdetail";
import { Grid } from "@mui/material";
import { GET_TRAINING_SESSIONS_PER_PROJECT } from "../../graphql/queries/trainingSessionsRequests";
import Tsdetail from "../../features/tsdetail/Tsdetail";
import Partdetail from "../../features/partdetail/Partdetail";
import { GET_PARTICIPANTS_PER_PROJECT } from "../../graphql/queries/participantsRequests";
import { GET_FARM_VISITS_PER_PROJECT } from "../../graphql/queries/farmVisitsRequests";
import LoaderPage from "../../pages/LoaderPage";

const Navbar = () => {
  if (localStorage.getItem("myPimaUserData") === null) {
    window.location.href = "/login";
  }

  // get current path
  const location = useLocation();
  const [projects, setProjects] = useState([]);
  const [trainingGroups, setTrainingGroups] = useState([]);
  const [trainingSessions, setTrainingSessions] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [farmVisits, setFarmVisits] = useState([]);
  const [projectStats, setProjectStats] = useState({
    total_bas: 0,
    total_fts: 0,
  });

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

  const participantsPerProject = useQuery(GET_PARTICIPANTS_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });

  const farmVisitsPerProject = useQuery(GET_FARM_VISITS_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });

  const projectStatistics = useQuery(GET_PROJECT_STATISTICS, {
    variables: { sfProjectId: selectedProject },
  });

  const [filter, setFilter] = useState({
    businessAdvisor: "",
    farmerTrainer: "",
    moduleName: "",
    sessionDate: "",
  });
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);

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
  }, [favProject]);

  useEffect(() => {
    if (trainingGroupsPerProject.data) {
      setTrainingGroups(
        trainingGroupsPerProject.data.trainingGroupsByProject.trainingGroups
      );
    }
  }, [trainingGroupsPerProject.data]);

  useEffect(() => {
    if (trainingSessionsPerProject.data) {
      setTrainingSessions(
        trainingSessionsPerProject.data.trainingSessionsByProject
          .trainingSessions
      );
    }
  }, [trainingSessionsPerProject.data]);

  useEffect(() => {
    if (participantsPerProject.data) {
      setParticipants(
        participantsPerProject.data.getParticipantsByProject.status === 200
          ? participantsPerProject.data.getParticipantsByProject.participants
          : []
      );
    }
  }, [participantsPerProject.data]);

  useEffect(() => {
    if (farmVisitsPerProject.data) {
      setFarmVisits(
        farmVisitsPerProject.data.getFarmVisitsByProject.status === 200
          ? farmVisitsPerProject.data.getFarmVisitsByProject.farmVisits
          : []
      );
    }
  }, [farmVisitsPerProject.data]);

  useEffect(() => {
    if (
      projectStatistics.data &&
      projectStatistics.data.getProjectStatistics.status === 200
    ) {
      setProjectStats({
        total_bas:
          projectStatistics.data.getProjectStatistics.statistics.total_bas,
        total_fts:
          projectStatistics.data.getProjectStatistics.statistics.total_fts,
      });
    }
  }, [projectStatistics.data]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      {trainingGroupsPerProject.loading ||
      trainingSessionsPerProject.loading ||
      participantsPerProject.loading ||
      farmVisitsPerProject.loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoaderPage
            loadings={{
              load1: trainingGroupsPerProject.loading,
              load2: trainingSessionsPerProject.loading,
              load3: participantsPerProject.loading,
              load4: farmVisitsPerProject.loading,
            }}
          />
          <BeatLoader
            color={"#1F2272"}
            loading={true}
            size={10}
            style={{ marginTop: "10px" }}
          />
        </div>
      ) : (
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
                    <Route
                      path="/"
                      element={
                        <Dashboard
                          trainingGroups={trainingGroups}
                          trainingSessions={trainingSessions}
                          participants={participants}
                          projectStats={projectStats}
                        />
                      }
                    />
                    <Route
                      path="/dashboard"
                      element={
                        <Dashboard
                          trainingGroups={trainingGroups}
                          trainingSessions={trainingSessions}
                          participants={participants}
                          projectStats={projectStats}
                        />
                      }
                    />
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
                            orgTrainingGroups={trainingGroups}
                            selectedProject={selectedProject}
                            filter={filter}
                            setFilter={setFilter}
                            setFilteredGroups={setFilteredGroups}
                            projectStats={projectStats}
                            participants={participants}
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
                            trainingSessions={
                              filteredSessions.length > 0
                                ? filteredSessions
                                : trainingSessions
                            }
                            selectedProject={selectedProject}
                            filter={filter}
                            setFilter={setFilter}
                            setFilteredSessions={setFilteredSessions}
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
                      path="/trainsession/:id"
                      element={<Tsdetail trainingSessions={trainingSessions} />}
                    />
                    <Route
                      path="/participants"
                      element={
                        !participantsPerProject.loading ? (
                          <Participants
                            participants={participants}
                            trainingGroups={trainingGroups}
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
                    <Route
                      path="/participants/:id"
                      element={
                        <Partdetail
                          participants={participants}
                          trainingSessions={trainingSessions}
                        />
                      }
                    />
                    <Route
                      path="/farmvisit"
                      element={
                        !farmVisitsPerProject.loading ? (
                          <FarmVisit
                            farmVisits={farmVisits}
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
                {loading ? (
                  <BeatLoader
                    color="#0D3C61"
                    size={15}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  />
                ) : (
                  <em style={{ color: "#0D3C61" }}>No Projects Assigned</em>
                )}
              </Grid>
            </Grid>
          )}
        </Sidebar>
      )}
    </div>
  );
};

export default Navbar;
