import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation SaveMailLogin($email: String!, $password: String!) {
    saveMailLogin(email: $email, password: $password) {
      message
      status
      token
    }
  }
`;

const VERIFY_GOOGLE_AUTH_MUTATION = gql`
  mutation VerifyGoogleAuth($credential: String!) {
    verifyGoogleAuth(token: $credential) {
      message
      status
      token
    }
  }
`;

const VERIFY_SAVED_TOKEN_MUTATION = gql`
  mutation VerifySavedToken($token: String!) {
    verifySavedToken(token: $token) {
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
