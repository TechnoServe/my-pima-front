import { gql } from "@apollo/client";

const GET_TRAINING_SESSIONS_PER_PROJECT = gql`
  query TrainingSessionsByProject($sfProjectId: String!) {
    trainingSessionsByProject(sf_project_id: $sfProjectId) {
      message
      status
      trainingSessions {
        ts_id
        ts_name
        ts_module
        ts_group
        tns_id
        ts_status
        total_males
        total_females
      }
    }
  }
`;

const GET_TRAINING_SESSIONS_PER_GROUP = gql`
  query TrainingSessionsByGroup($tgId: String!) {
    trainingSessionsByGroup(tg_id: $tgId) {
      message
      status
      trainingSessions {
        ts_id
        ts_name
        ts_module
        ts_status
        total_males
        total_females
      }
    }
  }
`;

export { GET_TRAINING_SESSIONS_PER_PROJECT, GET_TRAINING_SESSIONS_PER_GROUP };
