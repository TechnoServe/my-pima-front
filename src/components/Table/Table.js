import { useState, useEffect } from "react";
import "./table.css";
import FilterContainer from "../Filter/FilterContainer";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { BiSearchAlt } from "react-icons/bi";
import { Button } from "@mui/material";
import { FaFileExport } from "react-icons/fa";
import { ExportToCsv } from "export-to-csv";
import { utils, writeFile } from "xlsx";
import { useQuery } from "@apollo/client";
import TimeZone from "../../utils/timezone";
import FVQAModal from "../Modals/FVQAModal";
import Imagecontainer from "../../features/tsdetail/sessionimage/Imagecontainer";
import { GET_TRAINING_SESSION_IMAGE } from "../../graphql/queries/trainingSessionsRequests";

const customStyles = {
  rows: {
    style: {
      minHeight: "30px",
      cursor: "pointer",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      backgroundColor: "#1b2a4e", /* Matching sidebar color */
      color: "white",
    },
  },
  cells: {
    style: {
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingTop: "5px",
      paddingBottom: "5px",
    },
  },
};

// Export Buttons Component
const ExportButtons = ({ handleCSVExport, handleExcelExport, tableRowItem }) => (
  <div className="export-buttons">
    {tableRowItem !== "trainsessionapprov" && (
      <Button
        variant="outlined"
        sx={{ color: "#1b2a4e", borderColor: "#1b2a4e" }}
        onClick={handleCSVExport}
      >
        <FaFileExport style={{ marginRight: "5px" }} /> CSV
      </Button>
    )}
    <Button
      variant="outlined"
      sx={{ color: "#1b2a4e", borderColor: "#1b2a4e" }}
      onClick={handleExcelExport}
    >
      <FaFileExport style={{ marginRight: "5px" }} />
      {tableRowItem !== "trainsessionapprov" ? "Excel" : "Download Report"}
    </Button>
  </div>
);

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
  selectedProject,
}) => {
  const pathName = tableRowItem || window.location.pathname.split("/")[2];
  const [rowDetails, setRowDetails] = useState({ ts_id: null });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [session_image, setSession_image] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [fvId, setFvId] = useState(null);
  const navigate = useNavigate();

  const imageData = useQuery(GET_TRAINING_SESSION_IMAGE, {
    variables: { tsId: rowDetails && rowDetails.ts_id ? rowDetails.ts_id : "" },
    skip: !rowDetails,
  });

  // Restore original filename variable
  const filename =
    pathName === "traingroup"
      ? "mypima_training_group"
      : pathName === "trainsession"
      ? "mypima_training_session"
      : pathName === "participants"
      ? "Participants Data"
      : pathName === "farmvisit"
      ? "mypima_farm_visit"
      : "mypima_attendance";

  useEffect(() => {
    if (
      !imageData.loading &&
      imageData.data?.trainingSessionImage?.status === 200
    ) {
      setLoading(false);
      setSession_image(imageData.data.trainingSessionImage.trainingSessionImage);
    }
  }, [imageData]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleRowClick = (row) => {
    setRowDetails(row);

    const idMapping = {
      trainsession: row.ts_id,
      traingroup: row.tg_id,
      participants: row.p_id,
      farmvisit: row.fv_ids,
      trainsessionapprov: row.ts_id,
    };

    const id = idMapping[tableRowItem] || row.attendance_id;

    if (tableRowItem !== "farmvisit" && tableRowItem !== "trainsessionapprov") {
      navigate(`/in/${tableRowItem}/${id}`);
    } else if (tableRowItem === "farmvisit") {
      setFvId(row.fv_id);
      handleOpenModal();
    } else if (tableRowItem === "trainsessionapprov") {
      setOpen(true);
      setLoading(true);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredItems = data.filter((item) =>
      columns.some((column) => {
        const field = item[column.id];
        return field?.toString().toLowerCase().includes(value);
      })
    );
    setFilteredData(filteredItems);
    setSearchText(e.target.value);
  };

  const handleCSVExport = () => {
    if (data.length === 0) {
      alert("No data available for export.");
      return;
    }

    if (pathName === "farmvisit") {
      const new_columns = [
        { id: 'farmer_tns_id' },
        { id: 'household_tns_id' },
        { id: 'pima_household_id' },
        { id: 'pima_farmer_id' }
      ];
      
      // Use concat to add new columns
      columns = columns.concat(new_columns);
    }

    const csvExporter = new ExportToCsv({
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      useTextFile: false,
      useBom: true,
      filename: `${filename}`,
      headers: columns.map((column) => column.id),
    });

    csvExporter.generateCsv(
      data.map(
        ({ tg_id, ts_id, p_id, attendance_id, fv_id, __typename, ...rest }) =>
          rest
      )
    );
  };

  const handleExcelExport = () => {
    const sheetName = "Sessions Data";
    const summarySheetName = "Summary by Trainer";

    const sessionsData = {
      header: columns.map((column) => column.id),
      body: data.map(
        ({ tg_id, ts_id, p_id, attendance_id, fv_id, __typename, ...rest }) =>
          Object.values(rest)
      ),
    };

    const trainerSummary = data.reduce((acc, { farmer_trainer, session_image_status }) => {
      const key = `${farmer_trainer}_${session_image_status}`;
      if (!acc[key]) {
        acc[key] = { farmer_trainer, session_image_status, count: 0 };
      }
      acc[key].count += 1;
      return acc;
    }, {});

    const summaryData = Object.values(trainerSummary);

    const trainerSummaryData = {
      header: ["farmer_trainer", "session_image_status", "count"],
      body: summaryData.map((data) => Object.values(data)),
    };

    const workbook = utils.book_new();
    const sessionsWorksheet = utils.json_to_sheet(
      [sessionsData.header, ...sessionsData.body],
      { skipHeader: true }
    );
    const summaryWorksheet = utils.json_to_sheet(
      [trainerSummaryData.header, ...trainerSummaryData.body],
      { skipHeader: true }
    );

    utils.book_append_sheet(workbook, summaryWorksheet, summarySheetName);
    utils.book_append_sheet(workbook, sessionsWorksheet, sheetName);

    writeFile(workbook, `${filename}_${TimeZone()}.xlsx`);
  };

  return (
    <div>
      <div className={`table-header-actions ${!filter ? 'no-filter' : ''}`}>
        {/* Filter Button (if filter exists) */}
        {filter && (
          <Button className="filter-button">Filter</Button>
        )}

        {/* Search and Export Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
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

          {/* Export Buttons */}
          <ExportButtons
            handleCSVExport={handleCSVExport}
            handleExcelExport={handleExcelExport}
            tableRowItem={tableRowItem}
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={searchText.length > 0 ? filteredData : data}
        onRowClicked={handleRowClick}
        pagination
        highlightOnHover
        customStyles={customStyles}
        className="table-container"
      />

      <FVQAModal
        open={modalOpen}
        handleClose={handleCloseModal}
        fvId={fvId}
        details={details}
        rowDetails={rowDetails}
      />

      {open && (
        <Imagecontainer
          open={open}
          handleClose={() => setOpen(false)}
          id={rowDetails.ts_id}
          data={rowDetails}
          isVerified={rowDetails.is_verified}
          imageStatus={rowDetails.session_image_status}
          sessionImageUrl={session_image}
          selectedProject={selectedProject}
          loading={loading}
        />
      )}
    </div>
  );
};

export default Table;
