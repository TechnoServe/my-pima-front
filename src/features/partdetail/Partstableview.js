import PropTypes from 'prop-types'
import { Typography, Tabs, Tab, Box } from '@mui/material'
import { a11yProps } from '../tgdetail.js/Tgtabs'
import { useState } from 'react'
import Attendtable from './Table/attendtable'

function CustomTabPanel(props) {
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

const Partstableview = ({ trainingSessions, participant }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            borderTopLeftRadius: '3px',
            borderTopRightRadius: '3px',
            backgroundColor: 'rgba(0, 165, 163, 0.1)'
          }}
        >
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' textColor='primary'>
            <Tab label='TS Attendance History' {...a11yProps(0)} />
            <Tab label='Farm Visit History' {...a11yProps(1)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Attendtable trainingSessions={trainingSessions} participant={participant} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <h1>This is the farm vist history table</h1>
        </CustomTabPanel>
      </Box>
    </>
  )
}

export default Partstableview
