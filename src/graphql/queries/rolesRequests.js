import { gql } from "@apollo/client";

const GET_ALL_ROLES = gql`
  query GetRoles {
    getRoles {
      message
      status
      roles {
        role_id
        role_name
        role_desc
        is_default
        role_status
      }
    }
  }
`;

export { GET_ALL_ROLES };
