import { gql } from "@apollo/client";

export const GET_MANAGER_NEEDS_RANKING = gql`
  query GetManagerNeedsRanking($wetmillId: ID!) {
    getOperationsRanking(wetmillId: $wetmillId) {
      issue
      rank
      reason
    }
  }
`;

export const GET_MISSING_DOCUMENTS = gql`
  query GetMissingDocuments($wetmillId: ID!) {
    getMissingDocuments(wetmillId: $wetmillId)
  }
`;

export const GET_INFRASTRUCTURE_CHECKLIST = gql`
  query GetInfrastructureChecklist($wetmillId: ID!) {
    getInfrastructureChecklist(wetmillId: $wetmillId) {
      items
      goodItems
      repairItems
    }
  }
`;


export const GET_FINANCIAL_BREAKDOWN = gql`
  query GetFinancialBreakdown($wetmillId: ID!) {
    getFinancialBreakdown(wetmillId: $wetmillId) {
      totalProfit
      reserves
      socialActivities
      secondPaymentToFarmers
    }
  }
`;

export const GET_EMPLOYEE_STATS = gql`
  query GetEmployeeStats($wetmillId: ID!) {
    getEmployeeStats(wetmillId: $wetmillId) {
      menOwnership
      womenOwnership
      menFarmers
      womenFarmers
      menPermanent
      womenPermanent
      menTemporary
      womenTemporary
      menDaily
      womenDaily
    }
  }
`;


