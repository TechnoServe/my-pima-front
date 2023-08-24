import { gql } from '@apollo/client'

const GET_PARTICIPANTS_PER_PROJECT = gql`
  query GetParticipantsByProject($projectId: String!) {
    getParticipantsByProject(project_id: $projectId) {
      message
      status
      participants {
        p_id
        full_name
        gender
        location
        tns_id
        status
        farmer_trainer
        business_advisor
        project_name
        training_group
      }
    }
  }
`

const GET_PARTICIPANTS_PER_TG = gql`
  query GetParticipantsByGroup($tgId: String!) {
    getParticipantsByGroup(tg_id: $tgId) {
      message
      status
      participants {
        p_id
        full_name
        gender
        location
        tns_id
        status
        farmer_trainer
        business_advisor
        project_name
        training_group
      }
    }
  }
`

const GET_ATTENDANCE_PER_PARTICIPANT = gql`
  query GetAttendanceByParticipant($participantId: String!) {
    getAttendanceByParticipant(participant_id: $participantId) {
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
`

const UPLOAD_PARTICIPANTS = gql`
  mutation UploadParticipants($partsFile: Upload!) {
    uploadParticipants(parts_file: $partsFile) {
      message
      status
    }
  }
`

export { GET_PARTICIPANTS_PER_PROJECT, GET_PARTICIPANTS_PER_TG, GET_ATTENDANCE_PER_PARTICIPANT, UPLOAD_PARTICIPANTS }
