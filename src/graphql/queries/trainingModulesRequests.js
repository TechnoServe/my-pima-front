import { gql } from "@apollo/client";

const GET_ALL_TRAINING_MODULES = gql`
  query GetAllTrainingModules {
    getAllTrainingModules {
      message
      status
      training_modules {
        tm_id
        tm_name
        tm_title
        tm_module_number
        tm_project
        tm_status
        tm_is_current
        tm_date
      }
    }
  }
`;

const GET_TRAINING_MODULES_PER_PROJECT = gql`
  query GetTrainingModulesByProject($projectId: String!) {
    getTrainingModulesByProject(project_id: $projectId) {
      message
      status
      training_modules {
        tm_id
        tm_name
        tm_title
        tm_module_number
        tm_project
        tm_status
        tm_is_current
        tm_date
      }
    }
  }
`;

export { GET_ALL_TRAINING_MODULES, GET_TRAINING_MODULES_PER_PROJECT };
