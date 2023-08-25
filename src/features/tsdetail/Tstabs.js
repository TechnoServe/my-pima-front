import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Tabs, Tab, Box } from '@mui/material'
import Tstabdetail from './Tstabdetail'
import { a11yProps } from '../tgdetail/Tgtabs'

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

const Tstabs = ({ details }) => {
  return (
    <div>
      <Box sx={{ width: '100%', marginTop: '20px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={0} aria-label='basic tabs example'>
            <Tab label='Details' {...a11yProps(0)} disabled />{' '}
          </Tabs>
        </Box>

        <CustomTabPanel value={0} index={0}>
          <Tstabdetail details={details} />
        </CustomTabPanel>
      </Box>
    </div>
  )
}

export default Tstabs
