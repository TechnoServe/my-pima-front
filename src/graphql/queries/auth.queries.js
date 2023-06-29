import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation SaveMailLogin($email: String!, $password: String!) {
    saveMailLogin(email: $email, password: $password) {
      message
      status
      user {
        user_id
        user_name
        user_email
      }
      token
    }
  }
`;

const VERIFY_GOOGLE_AUTH_MUTATION = gql`
  mutation VerifyGoogleAuth($credential: String!) {
    saveGoogleLogin(token: $credential) {
      message
      status
      user {
        user_id
        user_name
        user_email
      }
      token
    }
  }
`;

const VERIFY_SAVED_TOKEN_MUTATION = gql`
  mutation VerifySavedToken($token: String!) {
    verifyToken(token: $token) {
      message
      status
    }
  }
`;

export {
  LOGIN_MUTATION,
  VERIFY_GOOGLE_AUTH_MUTATION,
  VERIFY_SAVED_TOKEN_MUTATION,
};
