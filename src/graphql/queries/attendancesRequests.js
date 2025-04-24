import { gql } from "@apollo/client";

// const GET_ALL_ATTENDANCES = gql`
//   query GetAttendances($projectId: String!) {
//     getAttendances(project_id: $projectId) {
//       message
//       status
//       attendance {
//         attendance_id
//         participant_id
//         attendance_name
//         attendance_date
//         attendance_status
//         session_id
//         module_name
//         module_number
//         module_id
//       }
//     }
//   }
// `;

const GET_ALL_ATTENDANCES = gql`
  query GetAttendances($projectId: String!, $limit: Int, $offset: Int) {
    getAttendances(project_id: $projectId, limit: $limit, offset: $offset) {
      message
      status
      attendance {
        attendance_id
        participant_id
        attendance_status
        module_name
        module_number
        module_id
      }
    }
  }
`;

export { GET_ALL_ATTENDANCES };
