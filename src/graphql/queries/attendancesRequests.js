import { gql } from "@apollo/client";

const GET_ALL_ATTENDANCES = gql`
  query GetAttendances($projectId: String!) {
    getAttendances(project_id: $projectId) {
      message
      status
      attendance {
        attendance_id
        participant_id
        attendance_name
        attendance_date
        attendance_status
        session_id
        module_name
        module_number
      }
    }
  }
`;

export { GET_ALL_ATTENDANCES };
