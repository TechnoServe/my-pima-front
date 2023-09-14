import { gql } from "@apollo/client";

const GET_ALL_ATTENDANCES = gql`
  query GetAttendances {
    getAttendances {
      message
      status
      attendance {
        attendance_id
        participant_id
        attendance_name
        attendance_date
        attendance_status
        session_id
      }
    }
  }
`;

export { GET_ALL_ATTENDANCES };
