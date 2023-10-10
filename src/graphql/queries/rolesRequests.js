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

const GET_USER_ROLE = gql`
  query GetRole($roleId: ID!) {
    getRole(role_id: $roleId) {
      message
      status
      role {
        role_id
        role_desc
        role_name
        role_status
      }
    }
  }
`;

export { GET_ALL_ROLES, GET_USER_ROLE };
