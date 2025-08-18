// src/graphql/queries/householdsForProject.js
import { gql } from "@apollo/client";

export const GET_HOUSEHOLDS_FOR_PROJECT = gql`
  query HouseholdsForProject($projectId: ID!) {
    householdsForProject(projectId: $projectId) {
      householdId
      householdName
      visitCount
      lastVisitedAt
      coffeePlots
      participants {
        id
        tnsId
        firstName
        middleName
        lastName
        gender
        phoneNumber
        primaryHouseholdMember
        numberOfCoffeePlots
        coffeeTreeNumbers
      }
    }
  }
`;
