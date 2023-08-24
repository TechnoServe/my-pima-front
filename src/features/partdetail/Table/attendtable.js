import React from 'react'
import Table from '../../../components/Table/Table'
import { useQuery } from '@apollo/client'
import { GET_ATTENDANCE_PER_PARTICIPANT } from '../../../graphql/queries/participantsRequests'
import { useEffect } from 'react'
import { useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { Chip } from '@mui/material'

const Attendtable = ({ trainingSessions, participant }) => {
  const [rows, setRows] = useState([]) // eslint-disable-line no-unused-vars

  const columns = [
    { id: 'num', name: 'No.', selector: (row) => row.num, sortable: true },
    {
      id: 'session_name',
      name: 'Session Name',
      selector: (row) => row.session_name,
      sortable: true
    },
    {
      id: 'attendance_name',
      name: 'Attendance Name',
      selector: (row) => row.attendance_name,
      sortable: true
    },
    {
      id: 'attendance_status',
      name: 'Status',
      selector: (row) => {
        return (
          <div>
            {row.attendance_status === 'Present' ? (
              <Chip label={'Attended'} color='success' variant='outlined' />
            ) : (
              <Chip label={'Missed'} color='error' variant='outlined' />
            )}
          </div>
        )
      },
      sortable: true
    },
    {
      id: 'attendance_date',
      name: 'Date',
      selector: (row) => row.attendance_date,
      sortable: true
    }
  ]
  const tableRowItem = 'trainsession'

  const getAttendancePerParticipant = useQuery(GET_ATTENDANCE_PER_PARTICIPANT, {
    variables: { participantId: participant.p_id }
  })

  useEffect(() => {
    if (getAttendancePerParticipant.data) {
      const attendance = getAttendancePerParticipant.data.getAttendanceByParticipant.attendance
      const rows = attendance.map((attend, index) => ({
        num: index + 1,
        attendance_id: attend.attendance_id,
        ts_id: attend.session_id,
        session_name: trainingSessions ? trainingSessions.find((session) => session.ts_id === attend.session_id).ts_name : 'N/A',
        attendance_name: attend.attendance_name,
        attendance_status: attend.attendance_status,
        attendance_date: attend.attendance_date
      }))
      setRows(rows)
    }
  }, [getAttendancePerParticipant.data, trainingSessions])

  return (
    <>
      {getAttendancePerParticipant.data ? (
        <div>
          {getAttendancePerParticipant.data.getAttendanceByParticipant.attendance.length > 0 ? (
            <Table columns={columns} data={rows} tableRowItem={tableRowItem} participant={participant} />
          ) : (
            <div className='no__data'>
              <h1 style={{ fontSize: '20px' }}>No Attendance Yet</h1>
            </div>
          )}
        </div>
      ) : getAttendancePerParticipant.loading ? (
        <BeatLoader
          color='#0D3C61'
          size={15}
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        />
      ) : (
        <div className='no__data'>
          <h1 style={{ fontSize: '20px' }}>No Attendance Yet</h1>
        </div>
      )}
    </>
  )
}

export default Attendtable
