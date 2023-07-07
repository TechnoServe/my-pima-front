import { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
  query {
    getProjects {
      message
      status
      projects {
        project_id
        sf_project_id
        project_name
        project_status
      }
    }
  }
`;

const GET_PROJECT_STATISTICS = gql`
  query GetProjectStatistics($sfProjectId: ID!) {
    getProjectStatistics(sf_project_id: $sfProjectId) {
      message
      status
      statistics {
        total_groups
        total_participants
        total_bas
        total_fts
      }
    }
  }
`;

export { GET_ALL_PROJECTS, GET_PROJECT_STATISTICS };
