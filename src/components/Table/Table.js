import { useState } from 'react'
import './table.css'
import FilterContainer from '../Filter/FilterContainer'
import { useNavigate } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { BiSearchAlt } from 'react-icons/bi'
import { Button } from '@mui/material'
import { FaFileExport } from 'react-icons/fa'
import { ExportToCsv } from 'export-to-csv'
import { downloadExcel } from 'react-export-table-to-excel'

const customStyles = {
  rows: {
    style: {
      minHeight: '50px', // override the row height
      cursor: 'pointer'
    }
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      backgroundColor: '#00A5A3'
    }
  },
  cells: {
    style: {
      paddingLeft: '5px', // override the cell padding for data cells
      paddingRight: '5px'
    }
  }
}

const Table = ({ columns, data, filter, setFilter, setFilteredGroups, setFilteredSessions, tableRowItem }) => {
  const pathName = window.location.pathname.split('/')[1]
  const filename =
    pathName === 'traingroup'
      ? 'mypima_training_group'
      : pathName === 'trainsession'
      ? 'mypima_training_session'
      : pathName === 'participants'
      ? 'mypima_participants'
      : pathName === 'farmvisit'
      ? 'mypima_farm_visit'
      : 'mypima_attendance'

  const navigate = useNavigate()

  const handleRowClick = (row) => {
    const id =
      tableRowItem === 'trainsession'
        ? row.ts_id
        : tableRowItem === 'traingroup'
        ? row.tg_id
        : tableRowItem === 'participants'
        ? row.p_id
        : tableRowItem === 'farmvisit'
        ? row.fv_id
        : row.attendance_id

    navigate(`/${tableRowItem}/${id}`)
  }

  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const handleSearch = (e) => {
    const value = e.target.value

    const filteredItems = data.filter((item) => {
      return columns.some((column) => {
        const field = item[column.id]
        if (field === null || field === undefined) {
          return false
        }
        return field.toString().toLowerCase().includes(value.toLowerCase())
      })
    })

    setFilteredData(filteredItems)

    setSearchText(e.target.value)
  }

  const handleCSVExport = () => {
    const csvExporter = new ExportToCsv({
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      useTextFile: false,
      useBom: true,
      filename: `${filename} ${new Date().toLocaleDateString()}`,
      headers: columns.map((column) => column.name)
    })

    csvExporter.generateCsv(data.map(({ tg_id, ts_id, p_id, attendance_id, fv_id, __typename, ...rest }) => rest))
  }

  const handleExcelExport = () => {
    downloadExcel({
      fileName: `${filename} ${new Date().toLocaleDateString()}`,
      sheet: filename,
      tablePayload: {
        header: columns.map((column) => column.name),
        body: data.map(({ tg_id, ts_id, p_id, attendance_id, fv_id, __typename, ...rest }) => rest)
      }
    })
  }

  return (
    <div>
      <div
        style={{
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <FilterContainer
          filter={filter}
          setFilter={setFilter}
          setFilteredGroups={setFilteredGroups}
          setFilteredSessions={setFilteredSessions}
          data={data}
        />
      </div>
      <div className='search-container'>
        <input type='text' placeholder='Search...' value={searchText} onChange={handleSearch} />
        <span className='search-icon'>
          <BiSearchAlt />
        </span>
      </div>
      <DataTable
        columns={columns}
        data={searchText.length > 0 ? filteredData : data}
        onRowClicked={handleRowClick}
        pagination
        highlightOnHover
        customStyles={customStyles}
        className='table-container'
        actions={
          <>
            <Button
              variant='outlined'
              sx={{
                color: '#00A5A3',
                borderColor: '#00A5A3'
              }}
              onClick={handleCSVExport}
            >
              <FaFileExport
                style={{
                  marginRight: '5px'
                }}
              />{' '}
              CSV
            </Button>
            <Button
              variant='outlined'
              sx={{
                color: '#00A5A3',
                borderColor: '#00A5A3'
              }}
              onClick={handleExcelExport}
            >
              <FaFileExport
                style={{
                  marginRight: '5px'
                }}
              />{' '}
              Excel
            </Button>
          </>
        }
      />
    </div>
  )
}

export default Table
