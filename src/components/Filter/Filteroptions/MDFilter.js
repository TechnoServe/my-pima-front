import { MenuItem, Select } from '@mui/material'
import { useState } from 'react'

const MDFilter = ({ setFilter, data }) => {
  const [selectedModule, setSelectedModule] = useState('')

  return (
    <div style={{ marginTop: '20px' }}>
      <Select
        value={selectedModule}
        onChange={(event) => {
          setSelectedModule(event.target.value)
          setFilter({
            moduleName: event.target.value
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
          Select Module
        </MenuItem>
        {[...new Set(data.map((d) => d.ts_module))].map((module) => (
          <MenuItem key={module} value={module}>
            {module}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default MDFilter
