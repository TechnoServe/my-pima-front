import { gql } from "@apollo/client";

const GET_FARM_VISITS_PER_PROJECT = gql`
  query GetFarmVisitsByProject($projectId: String!) {
    getFarmVisitsByProject(project_id: $projectId) {
      message
      status
      farmVisits {
        fv_id
        fv_name
        training_group
        training_session
        tns_id
        farm_visited
        household_id
        farmer_trainer
        has_training
        date_visited
      }
    }
  }
`;

const GET_FARM_VISITS_PER_TG = gql`
  query GetFarmVisitsByGroup($tgId: String!) {
    getFarmVisitsByGroup(tg_id: $tgId) {
      message
      status
      farmVisits {
        fv_id
        fv_name
        training_group
        training_session
        tns_id
        farm_visited
        household_id
        farmer_trainer
        has_training
        date_visited
      }
    }
  }
`;

const GET_FARM_VISITS_PER_TS = gql`
  query GetFarmVisitsBySession($tsId: String!) {
    getFarmVisitsBySession(ts_id: $tsId) {
      message
      status
      farmVisits {
        fv_id
        fv_name
        training_group
        training_session
        tns_id
        farm_visited
        household_id
        farmer_trainer
        has_training
        date_visited
      }
    }
  }
`;

const GET_FARM_VISITS_PER_PART = gql`
  query GetFarmVisitsByParticipant($partId: String!) {
    getFarmVisitsByParticipant(part_id: $partId) {
      message
      status
      farmVisits {
        fv_id
        fv_name
        training_group
        training_session
        tns_id
        farm_visited
        household_id
        farmer_trainer
        has_training
        date_visited
      }
    }
  }
`;

const GET_FARM_VISIT_QAs = gql`
  query FvQAs($fvId: String!) {
    getFVQAsByFarmVisits(fv_id: $fvId) {
      message
      status
      fvQAs {
        bp_id
        fv_id
        practice_name
        questions
        answers
        best_practice_adopted
      }
    }
  }
`;

export {
  GET_FARM_VISITS_PER_PROJECT,
  GET_FARM_VISITS_PER_TG,
  GET_FARM_VISITS_PER_TS,
  GET_FARM_VISITS_PER_PART,
  GET_FARM_VISIT_QAs,
};
