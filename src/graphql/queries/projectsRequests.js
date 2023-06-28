export { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
  query {
    getProjects {
      message
      status
      projects {
        project_id
        sf_project_id
        project_name
        project_status
      }
    }
  }
`;

export { GET_ALL_PROJECTS };
