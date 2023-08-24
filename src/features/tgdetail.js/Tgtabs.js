import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, Tabs, Tab, Box } from '@mui/material'
import Tgtabdetail from './Tgtabdetail'
import Tstabtable from './tstabtable'
import { useQuery } from '@apollo/client'
import { GET_TRAINING_SESSIONS_PER_GROUP } from '../../graphql/queries/trainingSessionsRequests'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-hot-toast'

export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function Tgtabs({ details }) {
  const [value, setValue] = useState(0)
  const [trainingSessions, setTrainingSessions] = useState([]) // eslint-disable-line no-unused-vars

  const { data, loading, error } = useQuery(GET_TRAINING_SESSIONS_PER_GROUP, {
    variables: { tgId: details.tg_id }
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (data && data.trainingSessionsByGroup.status === 200) {
      setTrainingSessions(data.trainingSessionsByGroup.trainingSessions)
    }
    if (error) {
      console.log(error)

      toast.error('Error fetching training sessions')
    }
  }, [data, error])

  return (
    <Box sx={{ width: '100%', marginTop: '20px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Details' {...a11yProps(0)} />
          <Tab label='Training session list' {...a11yProps(1)} />
          <Tab label='Farm Visit' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Tgtabdetail details={details} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {loading ? <BeatLoader color='#0D3C61' size={10} /> : <Tstabtable trainingSessions={trainingSessions} />}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Farm Visit
      </CustomTabPanel>
    </Box>
  )
}
