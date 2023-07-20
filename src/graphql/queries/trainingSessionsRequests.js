import { gql } from "@apollo/client";

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

export { GET_TRAINING_SESSIONS_PER_GROUP };
