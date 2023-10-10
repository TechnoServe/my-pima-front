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
        permissions
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

const UPDATE_ROLE = gql`
  mutation UpdateRole($roleId: ID!, $permissions: [String]) {
    updateRole(role_id: $roleId, permissions: $permissions) {
      message
      status
      role {
        permissions
        role_id
        role_desc
        role_name
        role_status
        is_default
      }
    }
  }
`;

export { GET_ALL_ROLES, GET_USER_ROLE, UPDATE_ROLE };
