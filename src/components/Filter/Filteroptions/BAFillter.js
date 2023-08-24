import { useState } from 'react'
import { MenuItem, Select } from '@mui/material'

const BAFilter = ({ setFilter, groups }) => {
  const [selectedBusinessAdvisor, setSelectedBusinessAdvisor] = useState('')
  const [selectedFarmerTrainer, setSelectedFarmerTrainer] = useState('')

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '20px'
      }}
    >
      <div>
        <h5>Business Advisor</h5>
        <Select
          value={selectedBusinessAdvisor}
          onChange={(event) => {
            setSelectedBusinessAdvisor(event.target.value)
            setSelectedFarmerTrainer('')
            setFilter({
              businessAdvisor: event.target.value,
              farmerTrainer: '',
              trainingGroup: ''
            })
          }}
          sx={{
            borderRadius: '5px',
            marginLeft: '10px',
            maxHeight: '50px',
            boxShadow: '0 4px 14px 0px rgba(0, 0, 0, 0.2)'
          }}
          displayEmpty
        >
          <MenuItem value='' selected disabled>
            Select BA
          </MenuItem>
          {[...new Set(groups.map((group) => group.business_advisor))].map((businessAdvisor) => (
            <MenuItem key={businessAdvisor} value={businessAdvisor}>
              {businessAdvisor}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div>
        <h5>Farmer Trainer</h5>
        <Select
          value={selectedFarmerTrainer}
          onChange={(event) => {
            setSelectedFarmerTrainer(event.target.value)
            setFilter({
              businessAdvisor: selectedBusinessAdvisor,
              farmerTrainer: event.target.value,
              trainingGroup: ''
            })
          }}
          sx={{
            borderRadius: '5px',
            marginLeft: '10px',
            maxHeight: '50px',
            boxShadow: '0 4px 14px 0px rgba(0, 0, 0, 0.2)'
          }}
          displayEmpty
        >
          <MenuItem value='' disabled selected>
            Select FT
          </MenuItem>
          {[...new Set(groups.map((group) => group.farmer_trainer))].map((farmerTrainer) => (
            <MenuItem key={farmerTrainer} value={farmerTrainer}>
              {farmerTrainer}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  )
}

export default BAFilter
