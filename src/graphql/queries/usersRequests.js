import { gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  query GetUsers {
    getUsers {
      message
      status
      users {
        user_id
        sf_user_id
        user_name
        user_email
        mobile_no
        account_status
        role {
          role_name
        }
      }
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $roleId: ID) {
    updateUser(user_id: $userId, role_id: $roleId) {
      message
      status
    }
  }
`;

export { GET_ALL_USERS, UPDATE_USER };
