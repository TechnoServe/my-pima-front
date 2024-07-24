import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./SideNavbar";
import Dashboard from "../../pages/Dashboard";
import Profile from "../../pages/Profile";
import TrainingGroup from "../../pages/TrainingGroup";
import TrainingSession from "../../pages/TrainingSession";
import Participants from "../../pages/Participants";
import FarmVisit from "../../pages/FarmVisit";
import AAPerfomance from "../../pages/AAPerformance";
import FTPerformance from "../../pages/FTPerformance";
import { BeatLoader } from "react-spinners";
import ProjectListDropdown from "../ProjectDrop/ProjectListDropdown";
import {
  GET_ALL_PROJECTS,
  GET_ASSIGNED_PROJECTS,
  GET_PROJECT_STATISTICS,
} from "../../graphql/queries/projectsRequests";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Toaster, toast } from "react-hot-toast";
import { GET_TRAINING_GROUPS_PER_PROJECT } from "../../graphql/queries/trainingGroupsRequests";
import Tgdetail from "../../features/tgdetail/Tgdetail";
import { Grid } from "@mui/material";
import { GET_TRAINING_SESSIONS_PER_PROJECT } from "../../graphql/queries/trainingSessionsRequests";
import Tsdetail from "../../features/tsdetail/Tsdetail";
import Partdetail from "../../features/partdetail/Partdetail";
import TSApprove from "../../features/tsapprove/tslist";
import FarmVisitList from "../../features/fvapprove/FarmVisitList";
import { GET_PARTICIPANTS_PER_PROJECT } from "../../graphql/queries/participantsRequests";
import { GET_FARM_VISITS_PER_PROJECT } from "../../graphql/queries/farmVisitsRequests";
import LoaderPage from "../../pages/LoaderPage";
import Management from "../../pages/Management";
import { GET_ALL_ATTENDANCES } from "../../graphql/queries/attendancesRequests";
import { useAuth } from "../../context/useAuth";

const Navbar = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [trainingGroups, setTrainingGroups] = useState([]);
  const [trainingSessions, setTrainingSessions] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [allAttendances, setAllAttendances] = useState([]);
  const [farmVisits, setFarmVisits] = useState([]);
  const [projectStats, setProjectStats] = useState({
    total_bas: 0,
    total_fts: 0,
  });

  const [getProjectsAssigned, { data, error, loading }] = useLazyQuery(
    GET_ASSIGNED_PROJECTS
  );
  const [selectedProject, setSelectedProject] = useState(
    localStorage.getItem("fav_project") || ""
  );

  const getAllProjects = useQuery(GET_ALL_PROJECTS);
  const trainingGroupsPerProject = useQuery(GET_TRAINING_GROUPS_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });
  const trainingSessionsPerProject = useQuery(
    GET_TRAINING_SESSIONS_PER_PROJECT,
    { variables: { sfProjectId: selectedProject } }
  );
  const participantsPerProject = useQuery(GET_PARTICIPANTS_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });
  const getAllAttendances = useQuery(GET_ALL_ATTENDANCES, {
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
    sessionApproval: "",
  });

  const [filteredGroups, setFilteredGroups] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);

  useEffect(() => {
    if (
      getAllProjects.data?.getProjects.status === 200 &&
      getAllProjects.data?.getProjects.projects.length > 0
    ) {
      setAllProjects(getAllProjects.data.getProjects.projects);
    }
    if (getAllProjects.error) {
      toast.error(getAllProjects.error.message);
    }
  }, [getAllProjects]);

  useEffect(() => {
    if (auth.user && auth.user.id) {
      loadProjects(auth.user.id)
        .then(() => {
          setProjects(data?.getProjectsAssigned.projects || []);
          setSelectedProject(
            data?.getProjectsAssigned.projects.find(
              (project) => project.sf_project_id === selectedProject
            )?.sf_project_id ||
              data?.getProjectsAssigned.projects[0]?.sf_project_id ||
              ""
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      navigate("/login");
    }
    if (error) {
      toast.error(error.message);
    }
  }, [auth.user, data, error, selectedProject, navigate]);

  const loadProjects = async (userId) => {
    await getProjectsAssigned({ variables: { userId: userId } });
  };

  useEffect(() => {
    if (trainingGroupsPerProject.data) {
      setTrainingGroups(
        trainingGroupsPerProject.data.trainingGroupsByProject.trainingGroups ||
          []
      );
    }
  }, [trainingGroupsPerProject.data]);

  useEffect(() => {
    if (trainingSessionsPerProject.data) {
      const sessions =
        trainingSessionsPerProject.data.trainingSessionsByProject
          .trainingSessions || [];
      setTrainingSessions(sessions);
      setFilteredSessions(sessions);
    }
  }, [trainingSessionsPerProject.data]);

  useEffect(() => {
    if (participantsPerProject.data) {
      const participantsData =
        participantsPerProject.data.getParticipantsByProject;
      setParticipants(
        participantsData.status === 200 ? participantsData.participants : []
      );
    }
  }, [participantsPerProject.data]);

  useEffect(() => {
    if (getAllAttendances.data) {
      const attendancesData = getAllAttendances.data.getAttendances;
      setAllAttendances(
        attendancesData.status === 200 ? attendancesData.attendance : []
      );
    }
  }, [getAllAttendances.data]);

  useEffect(() => {
    if (farmVisitsPerProject.data) {
      const farmVisitsData = farmVisitsPerProject.data.getFarmVisitsByProject;
      setFarmVisits(
        farmVisitsData.status === 200 ? farmVisitsData.farmVisits : []
      );
    }
  }, [farmVisitsPerProject.data]);

  useEffect(() => {
    if (projectStatistics.data?.getProjectStatistics.status === 200) {
      const statisticsData =
        projectStatistics.data.getProjectStatistics.statistics;
      setProjectStats({
        total_bas: statisticsData.total_bas,
        total_fts: statisticsData.total_fts,
      });
    }
  }, [projectStatistics.data]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {trainingGroupsPerProject.loading ||
      trainingSessionsPerProject.loading ? (
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
          <img
            src={process.env.PUBLIC_URL + "/techno-logo-transparent.png"}
            alt="technoServe-logo"
            style={{ width: "200px", height: "auto", marginBottom: "40px" }}
          />
          <LoaderPage
            loadings={{
              load1: trainingGroupsPerProject.loading,
              //load2: trainingSessionsPerProject.loading,
              load5: getAllAttendances.loading,
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
                          selectedProject={selectedProject}
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
                          selectedProject={selectedProject}
                        />
                      }
                    />
                    <Route
                      path="/traingroup"
                      element={
                        !trainingGroupsPerProject.loading ? (
                          <TrainingGroup
                            trainingGroups={
                              filteredGroups && filteredGroups.length > 0
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
                      element={
                        <Tgdetail
                          trainingGroups={trainingGroups}
                          trainingSessions={trainingSessions}
                          farmVisits={farmVisits}
                          participants={participants}
                        />
                      }
                    />
                    <Route
                      path="/trainsession"
                      element={
                        !trainingSessionsPerProject.loading ? (
                          <TrainingSession
                            trainingSessions={
                              filteredSessions && filteredSessions.length > 0
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
                      path="/performance/aa"
                      element={
                        <AAPerfomance selectedProject={selectedProject} />
                      }
                    />
                    <Route
                      path="/performance/ft"
                      element={
                        <FTPerformance selectedProject={selectedProject} />
                      }
                    />
                    <Route
                      path="/trainsession/pending"
                      element={
                        !trainingSessionsPerProject.loading ? (
                          <TSApprove
                            trainingSessions={
                              filteredSessions && filteredSessions.length > 0
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
                      element={
                        <Tsdetail
                          trainingSessions={trainingSessions}
                          selectedProject={selectedProject}
                        />
                      }
                    />
                    <Route
                      path="/participants"
                      element={
                        !participantsPerProject.loading &&
                        !getAllAttendances.loading ? (
                          <Participants
                            participants={participants}
                            allAttendances={allAttendances}
                            trainingGroups={trainingGroups}
                            selectedProject={selectedProject}
                            projects={projects}
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
                    {/* <Route
                      path="/farmvisit/verification"
                      element={
                        // !farmVisitsPerProject.loading ? (
                        <FarmVisitList
                          // farmVisits={farmVisits}
                          selectedProject={selectedProject}
                        />
                        // ) : (
                        //   <BeatLoader
                        //     color="#0D3C61"
                        //     size={15}
                        //     style={{
                        //       display: "flex",
                        //       justifyContent: "center",
                        //     }}
                        //   />
                        // )
                      }
                    /> */}
                    <Route
                      path="/manage"
                      element={<Management allProjects={allProjects} />}
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
                    style={{ display: "flex", justifyContent: "center" }}
                  />
                ) : (
                  <em style={{ color: "#0D3C61" }}>No Projects Assigned</em>
                )}
              </Grid>
            </Grid>
          )}
        </Sidebar>
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default Navbar;
