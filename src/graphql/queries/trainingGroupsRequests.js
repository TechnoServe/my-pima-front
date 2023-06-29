import { gql } from "@apollo/client";

const GET_TRAINING_GROUPS_PER_PROJECT = gql`
  query TrainingGroupsByProject($projectId: String!) {
    trainingGroupsByProject(project_id: $projectId) {
      message
      status
      trainingGroups {
        tg_id
        tg_name
        tns_id
        total_participants
        farmer_trainer
        business_advisor
      }
    }
  }
`;

export { GET_TRAINING_GROUPS_PER_PROJECT };
