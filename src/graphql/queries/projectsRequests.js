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
        total_bas
        total_fts
      }
    }
  }
`;

const GET_ASSIGNED_PROJECTS = gql`
  query GetProjectsAssigned($userId: ID!) {
    getProjectsAssigned(user_id: $userId) {
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

const GET_PROJECT_ROLES_BY_PROJECT_ID = gql`
  query GetProjectRolesByProjectId($projectId: ID!) {
    getProjectRolesByProjectId(project_id: $projectId) {
      message
      status
      project_role {
        pr_id
        tbl_user {
          user_id
          user_name
        }
        tbl_project {
          project_id
          project_name
        }
        tbl_role {
          role_id
          role_name
        }
      }
    }
  }
`;

export {
  GET_ALL_PROJECTS,
  GET_PROJECT_STATISTICS,
  GET_ASSIGNED_PROJECTS,
  GET_PROJECT_ROLES_BY_PROJECT_ID,
};
