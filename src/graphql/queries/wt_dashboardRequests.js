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
      data
    }
  }
`;


export const GET_CPQI_STATS = gql`
  query GetCpqiStats($wetmillId: ID!) {
    getCpqiStats(wetmillId: $wetmillId) {
      sections { sectionName yesPct noPct }
      overallYesPct
      overallNoPct
    }
  }
`;
export const GET_CPQI_CHECKLIST = gql`
  query GetCpqiChecklist($wetmillId: ID!) {
    getCpqiChecklist(wetmillId: $wetmillId) {
      sectionName
      criteria { questionName yes }
    }
  }
`;

export const GET_TRAINING_BY_TOPIC = gql`
  query GetTrainingByTopic($wetmillId: ID!) {
    getTrainingAttendanceByTopic(wetmillId: $wetmillId) {
      topic
      male
      female
    }
  }
`;

export const GET_TRAINING_OVERALL = gql`
  query GetTrainingOverall($wetmillId: ID!) {
    getTrainingAttendanceOverall(wetmillId: $wetmillId) {
      male
      female
    }
  }
`;

export const GET_KPI_STATS = gql`
  query GetKpiStats($wetmillId: ID!) {
    getKpiStats(wetmillId: $wetmillId) {
      cherry
      total
    }
  }
`;

export const GET_PARCHMENT_DISTRIBUTION = gql`
  query GetParchmentDistribution($wetmillId: ID!) {
    getParchmentDistribution(wetmillId: $wetmillId) {
      grade
      value
    }
  }
`;


