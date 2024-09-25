import React, { useState, useEffect, Suspense } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./SideNavbar";
import { BeatLoader } from "react-spinners";
import ProjectListDropdown from "../ProjectDrop/ProjectListDropdown";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Toaster, toast } from "react-hot-toast";
import { Grid } from "@mui/material";
import { useAuth } from "../../context/useAuth";
import {
  GET_ALL_PROJECTS,
  GET_ASSIGNED_PROJECTS,
  GET_PROJECT_STATISTICS,
} from "../../graphql/queries/projectsRequests";
import { GET_TRAINING_SESSIONS_PER_PROJECT } from "../../graphql/queries/trainingSessionsRequests";
import { GET_TRAINING_GROUPS_PER_PROJECT } from "../../graphql/queries/trainingGroupsRequests";


// Lazy loaded components
const Dashboard = React.lazy(() => import("../../pages/Dashboard"));
const Profile = React.lazy(() => import("../../pages/Profile"));
const TrainingGroup = React.lazy(() => import("../../pages/TrainingGroup"));
const TrainingSession = React.lazy(() => import("../../pages/TrainingSession"));
const FarmVisit = React.lazy(() => import("../../pages/FarmVisit"));
const AAPerfomance = React.lazy(() => import("../../pages/AAPerformance"));
const FTPerformance = React.lazy(() => import("../../pages/FTPerformance"));
const Tgdetail = React.lazy(() => import("../../features/tgdetail/Tgdetail"));
const Tsdetail = React.lazy(() => import("../../features/tsdetail/Tsdetail"));
//const TSApprove = React.lazy(() => import("../../features/tsapprove/tslist"));
const TSApprove = React.lazy(() => import("../../features/tsapprove/tsapprove"))
const LoaderPage = React.lazy(() => import("../../pages/LoaderPage"));
const Management = React.lazy(() => import("../../pages/Management"));
const FarmVisitApp = React.lazy(() => import("../../features/fvapprove/fvApprove"));
const Participants = React.lazy(() => import("../../pages/Participants")); // Corrected import

// Reusable component for loading states and error messages
const CenteredLoaderOrMessage = ({ loading, message }) => (
  <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
    {loading ? <BeatLoader color="#0D3C61" size={15} /> : <em style={{ color: "#0D3C61" }}>{message}</em>}
  </Grid>
);

const Navbar = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [trainingGroups, setTrainingGroups] = useState([]);
  const [trainingSessions, setTrainingSessions] = useState([]);
  const [projectStats, setProjectStats] = useState({ total_bas: 0, total_fts: 0 });

  const [getProjectsAssigned, { data, error, loading }] = useLazyQuery(GET_ASSIGNED_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(localStorage.getItem("fav_project") || "");

  const getAllProjects = useQuery(GET_ALL_PROJECTS);
  const trainingGroupsPerProject = useQuery(GET_TRAINING_GROUPS_PER_PROJECT, { variables: { projectId: selectedProject } });
  const trainingSessionsPerProject = useQuery(GET_TRAINING_SESSIONS_PER_PROJECT, { variables: { sfProjectId: selectedProject } });
  const projectStatistics = useQuery(GET_PROJECT_STATISTICS, { variables: { sfProjectId: selectedProject } });

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
    if (getAllProjects.data?.getProjects.status === 200 && getAllProjects.data?.getProjects.projects.length > 0) {
      setAllProjects(getAllProjects.data.getProjects.projects);
    }
    if (getAllProjects.error) {
      toast.error(getAllProjects.error.message);
    }
  }, [getAllProjects]);

  const loadProjects = async (userId) => {
    await getProjectsAssigned({ variables: { userId: userId } });
  };

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

  

  useEffect(() => {
    if (trainingGroupsPerProject.data) {
      setTrainingGroups(trainingGroupsPerProject.data.trainingGroupsByProject.trainingGroups || []);
    }
  }, [trainingGroupsPerProject.data]);

  useEffect(() => {
    if (trainingSessionsPerProject.data) {
      const sessions = trainingSessionsPerProject.data.trainingSessionsByProject.trainingSessions || [];
      setTrainingSessions(sessions);
      setFilteredSessions(sessions);
    }
  }, [trainingSessionsPerProject.data]);

  useEffect(() => {
    if (projectStatistics.data?.getProjectStatistics.status === 200) {
      const statisticsData = projectStatistics.data.getProjectStatistics.statistics;
      setProjectStats({
        total_bas: statisticsData.total_bas,
        total_fts: statisticsData.total_fts,
      });
    }
  }, [projectStatistics.data]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {trainingGroupsPerProject.loading || trainingSessionsPerProject.loading ? (
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
              load5: false, // No need to show attendance loading here
            }}
          />
          <BeatLoader color={"#1F2272"} loading={true} size={10} style={{ marginTop: "10px" }} />
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
                  <Suspense fallback={<CenteredLoaderOrMessage loading={true} message="Loading..." />}>
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <Dashboard
                            trainingGroups={trainingGroups}
                            trainingSessions={trainingSessions}
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
                            projectStats={projectStats}
                            selectedProject={selectedProject}
                          />
                        }
                      />
                      <Route
                        path="/traingroup"
                        element={
                          <TrainingGroup
                            trainingGroups={filteredGroups.length > 0 ? filteredGroups : trainingGroups}
                            orgTrainingGroups={trainingGroups}
                            selectedProject={selectedProject}
                            filter={filter}
                            setFilter={setFilter}
                            setFilteredGroups={setFilteredGroups}
                            projectStats={projectStats}
                          />
                        }
                      />
                      <Route
                        path="/traingroup/:id"
                        element={
                          <Tgdetail
                            trainingGroups={trainingGroups}
                            trainingSessions={trainingSessions}
                          />
                        }
                      />
                      <Route
                        path="/trainsession"
                        element={
                          <TrainingSession
                            trainingSessions={filteredSessions.length > 0 ? filteredSessions : trainingSessions}
                            selectedProject={selectedProject}
                            filter={filter}
                            setFilter={setFilter}
                            setFilteredSessions={setFilteredSessions}
                          />
                        }
                      />
                      <Route
                        path="/performance/aa"
                        element={<AAPerfomance selectedProject={selectedProject} />}
                      />
                      <Route
                        path="/performance/ft"
                        element={<FTPerformance selectedProject={selectedProject} />}
                      />
                      <Route
                        path="/trainsession/pending"
                        element={
                          <TSApprove
                            trainingSessions={filteredSessions.length > 0 ? filteredSessions : trainingSessions}
                            selectedProject={selectedProject}
                            filter={filter}
                            setFilter={setFilter}
                            setFilteredSessions={setFilteredSessions}
                          />
                        }
                      />
                       <Route
                        path="/trainsession/verification"
                        element={
                          <TSApprove
                            selectedProject={selectedProject}
                            filter={filter}
                            setFilter={setFilter}
                            userId={auth.user.id}
                          />
                        }
                      />
                      <Route
                        path="/trainsession/:id"
                        element={<Tsdetail trainingSessions={trainingSessions} selectedProject={selectedProject} />}
                      />
                      <Route
                        path="/participants"
                        element={
                          <Participants selectedProject={selectedProject} trainingGroups={trainingGroups} projects={projects} />
                        }
                      />
                      <Route
                        path="/farmvisit"
                        element={<FarmVisit selectedProject={selectedProject} />}
                      />
                      <Route
                        path="/farmvisit/verification"
                        element={<FarmVisitApp selectedProject={selectedProject} userId={auth.user.id} />}
                      />
                      <Route
                        path="/manage"
                        element={<Management allProjects={allProjects} />}
                      />
                    </Routes>
                  </Suspense>
                </div>
              ) : (
                <Suspense fallback={<CenteredLoaderOrMessage loading={true} message="Loading Profile..." />}>
                  <Routes>
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </Suspense>
              )}
            </>
          ) : (
            <CenteredLoaderOrMessage loading={loading} message="No Projects Assigned" />
          )}
        </Sidebar>
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default Navbar;

