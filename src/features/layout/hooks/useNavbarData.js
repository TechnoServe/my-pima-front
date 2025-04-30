// src/layouts/hooks/useNavbarData.js

import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { toast } from 'react-hot-toast';

import { useProjectData } from './useProjectData';
import { useAssignedProjects } from './useAssignedProjects';
import { GET_WETMILLS } from '../../../graphql/queries/wetmills';

export const useNavbarData = (user, focusArea) => {
  // ── filters & local UI state ─────────────────────────────────────────────
  const [filter, setFilter] = useState({
    businessAdvisor: '',
    farmerTrainer: '',
    moduleName: '',
    sessionDate: '',
    sessionApproval: '',
  });

  const [filteredGroups, setFilteredGroups] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);

  // ── assigned-projects (always) ────────────────────────────────────────────
  const {
    projects,
    activeProject,
    setActiveProject,
    loading: loadingProjects,
  } = useAssignedProjects(
    user?.id,
    localStorage.getItem('fav_project')
  );

  // ── agronomy data (only if focusArea==='agronomy') ────────────────────────
  const {
    trainingGroups,
    trainingSessions,
    projectStats,
    loading: loadingProjectData,
  } = useProjectData(
    focusArea === 'agronomy' ? activeProject : null
  );

  // keep sessions in sync with filter UI
  useEffect(() => {
    setFilteredSessions(trainingSessions);
  }, [trainingSessions]);

  // ── sustainability data (only if focusArea==='sustainability') ──────────
  const {
    data: wmData,
    loading: loadingWetmills,
    error: wetmillsError,
  } = useQuery(GET_WETMILLS, {
    skip: focusArea !== 'sustainability',
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (wetmillsError) toast.error(wetmillsError.message);
  }, [wetmillsError]);

  const wetmills =
    focusArea === 'sustainability' && wmData?.getWetmills?.status === 200
      ? wmData.getWetmills.wetmills.map((w) => ({
          id: w.wet_mill_unique_id,
          name: w.name,
        }))
      : [];

  // ── program selector UI state ────────────────────────────────────────────
  const [program, setProgram] = useState(
    localStorage.getItem('active_program') || 'agronomy'
  );

  // ── combined loading flag ─────────────────────────────────────────────────
  const loading =
    loadingProjects ||
    loadingProjectData ||
    loadingWetmills;

  return {
    // shared
    projects,
    activeProject,
    setActiveProject,
    filter,
    setFilter,
    filteredGroups,
    setFilteredGroups,
    filteredSessions,
    setFilteredSessions,

    // agronomy-specific
    trainingGroups: focusArea === 'agronomy' ? trainingGroups : [],
    trainingSessions: focusArea === 'agronomy' ? trainingSessions : [],
    projectStats: focusArea === 'agronomy' ? projectStats : {},

    // sustainability-specific
    wetmills,

    // UI state
    loading,
    program,
    setProgram,
  };
};
