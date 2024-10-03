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
        has_image
        session_image_status
        is_verified
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
        has_image
        session_image_status
        is_verified
        session_date
      }
    }
  }
`;

const GET_TRAINING_SESSION_IMAGE = gql`
  query TrainingSessionImage($tsId: ID!) {
    trainingSessionImage(ts_id: $tsId) {
      message
      status
      trainingSessionImage
    }
  }
`;

const VALIDATE_TRAINING_SESSION = gql`
  mutation ValidateSession($tsId: ID!, $status: String!) {
    validateSession(ts_id: $tsId, status: $status) {
      message
      status
      trainingSession {
        ts_id
      }
    }
  }
`;

const GET_SAMPLED_SESSIONS = gql`
  query sampledTrainingSessions($projectId: String!) {
    sampledTrainingSessions(sf_project_id: $projectId) {
      id
      training_module_name
      tg_name
      tg_tns_id
      total_attendance
      male_attendance
      female_attendance
      farmer_trainer_name
      session_image_url
      session_date
      image_review_result
      ts_latitude
      ts_longitude
    }
  }
`;

const REVIEW_SESSION = gql`
  mutation ReviewSession($id: ID!, $status: String!) {
    reviewSession(id: $id, status: $status) {
      success
      message
      session {
        id
        image_review_result
      }
    }
  }
`;

const SUBMIT_BATCH = gql`
  mutation validateSession($input: [SessionReviewInput!]!) {
    validateSession(input: $input) {
      status
      message
    }
  }
`;

export {
  GET_TRAINING_SESSIONS_PER_PROJECT,
  GET_TRAINING_SESSIONS_PER_GROUP,
  GET_TRAINING_SESSION_IMAGE,
  VALIDATE_TRAINING_SESSION,
  GET_SAMPLED_SESSIONS,
  REVIEW_SESSION,
  SUBMIT_BATCH,
};
