import { gql } from "@apollo/client";

const GET_ALL_PERMISSIONS = gql`
  query GetPermissions {
    getPermissions {
      message
      status
      permissions {
        perm_id
        perm_name
        perm_desc
        perm_status
        createdAt
        updatedAt
      }
    }
  }
`;

export { GET_ALL_PERMISSIONS };
