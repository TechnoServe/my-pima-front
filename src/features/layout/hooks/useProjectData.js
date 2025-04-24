import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_TRAINING_SESSIONS_PER_PROJECT } from "../../../graphql/queries/trainingSessionsRequests";
import { GET_TRAINING_GROUPS_PER_PROJECT } from "../../../graphql/queries/trainingGroupsRequests";
import { GET_PROJECT_STATISTICS } from "../../../graphql/queries/projectsRequests";

export const useProjectData = (activeProject) => {
  const [trainingGroups, setTrainingGroups] = useState([]);
  const [trainingSessions, setTrainingSessions] = useState([]);
  const [projectStats, setProjectStats] = useState({ total_bas: 0, total_fts: 0 });

  const trainingGroupsQuery = useQuery(GET_TRAINING_GROUPS_PER_PROJECT, {
    variables: { projectId: activeProject },
    skip: !activeProject,
  });

  const trainingSessionsQuery = useQuery(GET_TRAINING_SESSIONS_PER_PROJECT, {
    variables: { sfProjectId: activeProject },
    skip: !activeProject,
  });

  const projectStatsQuery = useQuery(GET_PROJECT_STATISTICS, {
    variables: { sfProjectId: activeProject },
    skip: !activeProject,
  });

  useEffect(() => {
    const groups = trainingGroupsQuery.data?.trainingGroupsByProject?.trainingGroups;
    if (groups) setTrainingGroups(groups);
  }, [trainingGroupsQuery.data]);

  useEffect(() => {
    const sessions = trainingSessionsQuery.data?.trainingSessionsByProject?.trainingSessions;
    if (sessions) setTrainingSessions(sessions);
  }, [trainingSessionsQuery.data]);

  useEffect(() => {
    const stats = projectStatsQuery.data?.getProjectStatistics?.statistics;
    if (stats) {
      setProjectStats({
        total_bas: stats.total_bas || 0,
        total_fts: stats.total_fts || 0,
      });
    }
  }, [projectStatsQuery.data]);

  const loading =
    trainingGroupsQuery.loading ||
    trainingSessionsQuery.loading ||
    projectStatsQuery.loading;

  return {
    trainingGroups,
    trainingSessions,
    projectStats,
    loading,
  };
};
