import { useEffect, useState } from 'react';
import { useProjectData } from './useProjectData';
import { useAssignedProjects } from './useAssignedProjects';

export const useNavbarData = (user) => {
  const [filter, setFilter] = useState({
    businessAdvisor: '',
    farmerTrainer: '',
    moduleName: '',
    sessionDate: '',
    sessionApproval: '',
  });

  const [filteredGroups, setFilteredGroups] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);

  const { projects, activeProject, setActiveProject, loading: loadingProjects } =
    useAssignedProjects(user?.id, localStorage.getItem('fav_project'));

  const {
    trainingGroups,
    trainingSessions,
    projectStats,
    loading: loadingData,
  } = useProjectData(activeProject);

  useEffect(() => {
    setFilteredSessions(trainingSessions);
  }, [trainingSessions]);

  const [program, setProgram] = useState(localStorage.getItem("active_program") || "agronomy");

  return {
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
    projectStats,
    loading: loadingData || loadingProjects,
    program, 
    setProgram
  };
};