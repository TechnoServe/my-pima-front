import { useState, useEffect } from "react";
import "./table.css";
import FilterContainer from "../Filter/FilterContainer";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { BiSearchAlt } from "react-icons/bi";
import { Button } from "@mui/material";
import { FaFileExport } from "react-icons/fa";
import { ExportToCsv } from "export-to-csv";
// import { downloadExcel } from "react-export-table-to-excel";
import { utils, writeFile } from "xlsx";

import { useQuery } from "@apollo/client";

import TimeZone from "../../utils/timezone";
import FVQAModal from "../Modals/FVQAModal";
import Imagecontainer from "../../features/tsdetail/sessionimage/Imagecontainer";
import { GET_TRAINING_SESSION_IMAGE } from "../../graphql/queries/trainingSessionsRequests";

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
  selectedProject,
}) => {
  const pathName = tableRowItem || window.location.pathname.split("/")[2];

  const [rowDetails, setRowDetails] = useState({ ts_id: null });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [session_image, setSession_image] = useState(null);
  console.log("rowDetails", rowDetails);

  const imageData = useQuery(GET_TRAINING_SESSION_IMAGE, {
    variables: { tsId: rowDetails && rowDetails.ts_id ? rowDetails.ts_id : "" },
    skip: !rowDetails,
  });

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

  const navigate = useNavigate();

  useEffect(() => {
    console.log("seeting image", imageData);
    if (
      !imageData.loading &&
      imageData &&
      imageData.data &&
      imageData.data.trainingSessionImage &&
      imageData.data.trainingSessionImage.status === 200
    ) {
      console.log("IMage set");
      setLoading(false);
      setSession_image(
        imageData.data.trainingSessionImage.trainingSessionImage
      );
    }
  }, [imageData]);

  // useEffect(() => {
  //   const { imageData, loading } = useQuery(GET_TRAINING_SESSION_IMAGE, {
  //     variables: { tsId: rowDetails.ts_id },
  //   });
  // }, [data, loading]);

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
        ? row.fv_ids
        : tableRowItem === "trainsessionapprov"
        ? row.ts_id
        : row.attendance_id;

    if (tableRowItem !== "farmvisit" && tableRowItem !== "trainsessionapprov") {
      navigate(
        `/in/${
          tableRowItem === "trainsessionapprov" ? "trainsession" : tableRowItem
        }/${id}`
      );
    }

    if (tableRowItem === "farmvisit") {
      setFvId(row.fv_id);
      handleOpenModal();
    }

    if (tableRowItem === "trainsessionapprov") {
      //setFvId(row.fv_id);
      setOpen(true);
      setLoading(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
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
      "Project",
      "first_name",
      "middle_name",
      "last_name",
      "gender",
      "age",
      "coffee_tree_numbers",
      "number_of_coffee_plots",
      "phone_number",
      selectedProject === "a0EOj000002FMGnMAO" ||
      selectedProject === "a0EOj000002C7ivMAC"
        ? "national_identification_id"
        : "coop_membership_number",
      "location",
      "farmer_sf_id",
      "tns_id",
      "hh_number",
      "sf_household_id",
      "farmer_number",
      "ffg_id",
      "training_group",
      "status",
      "farmer_trainer",
      "business_advisor",
      "create_in_commcare",
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
        const {
          attendance_status,
          participant_id,
          module_number,
          module_name,
          module_id,
        } = attendance;
        // const [year, month] = attendance_date.split("-");
        const key = `${module_number}-${module_name}-${module_id}`;

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
      const csvRows =
        searchText.length > 0
          ? filteredData.map((participant) => {
              const rowData = { ...participant };
              for (const [
                monthKey,
                monthlyAttendance,
              ] of monthlyAttendanceMap) {
                rowData[monthKey] = monthlyAttendance[participant.p_id] || "";
              }
              return rowData;
            })
          : data.map((participant) => {
              const rowData = { ...participant };
              for (const [
                monthKey,
                monthlyAttendance,
              ] of monthlyAttendanceMap) {
                rowData[monthKey] = monthlyAttendance[participant.p_id] || "";
              }
              return rowData;
            });

      data = csvRows;

      console.log("CSV Participants export");

      console.log(data);
    }

    console.log(columns);
    console.log("data", data);

    // Combine header and rows to form the CSV content
    const csvExporter = new ExportToCsv({
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      useTextFile: false,
      useBom: true,
      filename: `${data[0].Project}_${filename}`,
      headers:
        tableRowItem === "participants"
          ? partsHeaders
          : columns.map((column) => column.id),
    });

    csvExporter.generateCsv(
      data.map(
        ({ tg_id, ts_id, p_id, attendance_id, fv_id, __typename, ...rest }) =>
          rest
      )
    );
  };

  // const handleExcelExport = () => {
  //   downloadExcel({
  //     fileName: `${filename}_${TimeZone()}`,
  //     sheet: `${filename}_${TimeZone()}`,
  //     tablePayload: {
  //       header: columns.map((column) => column.id),
  //       body: data.map(
  //         ({ tg_id, ts_id, p_id, attendance_id, fv_id, __typename, ...rest }) =>
  //           rest
  //       ),
  //     },
  //   });
  // };

  const handleExcelExport = () => {
    const sheetName = "Sessions Data";
    const summarySheetName = "Summary by Trainer";

    // Sheet 1: Sessions Data
    const sessionsData = {
      header: columns.map((column) => column.id),
      body: data.map(
        ({ tg_id, ts_id, p_id, attendance_id, fv_id, __typename, ...rest }) =>
          Object.values(rest)
      ),
    };

    // Sheet 2: Summary by Trainer
    const trainerSummary = data.reduce(
      (acc, { farmer_trainer, session_image_status }) => {
        const key = `${farmer_trainer}_${session_image_status}`;

        // Initialize count if it doesn't exist
        if (!acc[key]) {
          acc[key] = { farmer_trainer, session_image_status, count: 0 };
        }

        // Increment the count for the specific combination
        acc[key].count += 1;

        return acc;
      },
      {}
    );

    const summaryData = Object.values(trainerSummary);

    const trainerSummaryData = {
      header: ["farmer_trainer", "session_image_status", "count"],
      body: summaryData.map((data) => Object.values(data)),
    };

    // Create a workbook and add sheets
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

    // Save the workbook as an Excel file
    writeFile(workbook, `${filename}_${TimeZone()}.xlsx`);
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
              {tableRowItem !== "trainsessionapprov" && (
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
              )}
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
                {tableRowItem !== "trainsessionapprov"
                  ? "Excel"
                  : "Download Report"}
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

      {open && (
        <Imagecontainer
          open={open}
          handleClose={handleClose}
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
