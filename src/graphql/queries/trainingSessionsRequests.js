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
        farmer_trainer
        ts_status
        total_males
        total_females
        session_images
        session_date
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
        farmer_trainer
        ts_status
        total_males
        total_females
        session_images
        session_date
      }
    }
  }
`;

export { GET_TRAINING_SESSIONS_PER_PROJECT, GET_TRAINING_SESSIONS_PER_GROUP };
