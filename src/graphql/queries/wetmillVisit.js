import { gql } from "@apollo/client";

export const GET_WETMILL_VISITS = gql`
  query GetWetmillVisits($program: String!) {
    getVisits(program: $program) {
      message
      status
      visits {
        id
        visited_at
        wetmillId
      }
    }
  }
`;
