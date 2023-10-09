import { useState } from "react";
import "./table.css";
import FilterContainer from "../Filter/FilterContainer";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { BiSearchAlt } from "react-icons/bi";
import { Button } from "@mui/material";
import { FaFileExport } from "react-icons/fa";
import { ExportToCsv } from "export-to-csv";
import { downloadExcel } from "react-export-table-to-excel";
import TimeZone from "../../utils/timezone";
import FVQAModal from "../Modals/FVQAModal";

const customStyles = {
  rows: {
    style: {
      minHeight: "50px", // override the row height
      cursor: "pointer",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      backgroundColor: "#00A5A3",
    },
  },
  cells: {
    style: {
      paddingLeft: "5px", // override the cell padding for data cells
      paddingRight: "5px",
    },
  },
};

const Table = ({
  columns,
  data,
  filter,
  setFilter,
  setFilteredGroups,
  setFilteredSessions,
  tableRowItem,
  allAttendances,
  details,
  selectedProject
}) => {
  const pathName = tableRowItem || window.location.pathname.split("/")[2];

  const [rowDetails, setRowDetails] = useState(null);

  const filename =
    pathName === "traingroup"
      ? "mypima_training_group"
      : pathName === "trainsession"
      ? "mypima_training_session"
      : pathName === "participants"
      ? "mypima_participants"
      : pathName === "farmvisit"
      ? "mypima_farm_visit"
      : "mypima_attendance";

  const navigate = useNavigate();

  const handleRowClick = (row) => {
    setRowDetails(row);

    const id =
      tableRowItem === "trainsession"
        ? row.ts_id
        : tableRowItem === "traingroup"
        ? row.tg_id
        : tableRowItem === "participants"
        ? row.p_id
        : tableRowItem === "farmvisit"
        ? row.fv_id
        : row.attendance_id;

    if (tableRowItem !== "farmvisit") {
      navigate(`/in/${tableRowItem}/${id}`);
    }

    if (tableRowItem === "farmvisit") {
      setFvId(row.fv_id);
      handleOpenModal();
    }
  };

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [fvId, setFvId] = useState(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value;

    const filteredItems = data.filter((item) => {
      return columns.some((column) => {
        const field = item[column.id];
        if (field === null || field === undefined) {
          return false;
        }
        return field.toString().toLowerCase().includes(value.toLowerCase());
      });
    });

    setFilteredData(filteredItems);

    setSearchText(e.target.value);
  };

  const handleCSVExport = () => {
    // Create an array of headers for the CSV file
    const partsHeaders = [
      "num",
      "full_name",
      "gender",
      "location",
      "tns_id",
      "training_group",
      "household_id",
      "primary_household_member",
      "status",
      "farmer_trainer",
      "business_advisor",
    ];

    if (tableRowItem === "participants") {
      // Create a map to store monthly attendance data
      const monthlyAttendanceMap = new Map();

      // filter all attendances by data's participant ids
      const filteredAttendances = allAttendances.filter((attendance) =>
        data.some(
          (participant) => participant.p_id === attendance.participant_id
        )
      );

      // Iterate through the attendance data to calculate monthly attendance
      filteredAttendances.forEach((attendance) => {
        const { attendance_date, attendance_status, participant_id } =
          attendance;
        const [year, month] = attendance_date.split("-");
        const key = `${year}-${month}`;

        // Initialize the monthly attendance object if it doesn't exist
        if (!monthlyAttendanceMap.has(key)) {
          monthlyAttendanceMap.set(key, {});
        }

        // Set the attendance status for the participant in the corresponding month
        const monthlyAttendance = monthlyAttendanceMap.get(key);
        monthlyAttendance[participant_id] =
          attendance_status === "Present" ? "1" : "0";
      });

      // Add monthly columns to the headers
      for (const [monthKey] of monthlyAttendanceMap) {
        partsHeaders.push(monthKey);
      }

      // Prepare data for writing to the CSV file
      const csvRows = data.map((participant) => {
        const rowData = { ...participant };
        for (const [monthKey, monthlyAttendance] of monthlyAttendanceMap) {
          rowData[monthKey] = monthlyAttendance[participant.p_id] || "";
        }
        return rowData;
      });

      data = csvRows;
    }

    // Combine header and rows to form the CSV content
    const csvExporter = new ExportToCsv({
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      useTextFile: false,
      useBom: true,
      filename: `${filename}_${TimeZone()}`,
      headers:
        tableRowItem === "participants"
          ? partsHeaders
          : columns.map((column) => column.name),
    });

    csvExporter.generateCsv(
      data.map(
        ({ tg_id, ts_id, p_id, attendance_id, fv_id, __typename, ...rest }) =>
          rest
      )
    );
  };

  const handleExcelExport = () => {
    downloadExcel({
      fileName: `${filename}_${TimeZone()}`,
      sheet: `${filename}_${TimeZone()}`,
      tablePayload: {
        header: columns.map((column) => column.name),
        body: data.map(
          ({ tg_id, ts_id, p_id, attendance_id, fv_id, __typename, ...rest }) =>
            rest
        ),
      },
    });
  };

  return (
    <div>
      <div
        style={{
          overflow: "auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {filter && (
          <FilterContainer
            filter={filter}
            setFilter={setFilter}
            setFilteredGroups={setFilteredGroups}
            setFilteredSessions={setFilteredSessions}
            data={data}
            tableRowItem={tableRowItem}
            selectedProject={selectedProject}
          />
        )}
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
        />
        <span className="search-icon">
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
        className="table-container"
        actions={
          data.length > 0 && (
            <>
              <Button
                variant="outlined"
                sx={{
                  color: "#00A5A3",
                  borderColor: "#00A5A3",
                }}
                onClick={handleCSVExport}
              >
                <FaFileExport
                  style={{
                    marginRight: "5px",
                  }}
                />{" "}
                CSV
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#00A5A3",
                  borderColor: "#00A5A3",
                }}
                onClick={handleExcelExport}
              >
                <FaFileExport
                  style={{
                    marginRight: "5px",
                  }}
                />{" "}
                Excel
              </Button>
            </>
          )
        }
      />

      <FVQAModal
        open={modalOpen}
        handleClose={handleCloseModal}
        fvId={fvId}
        details={details}
        rowDetails={rowDetails}
      />
    </div>
  );
};

export default Table;
