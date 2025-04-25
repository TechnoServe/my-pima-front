import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import { gql, useQuery } from "@apollo/client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import "./FTPerformance.css";
import * as XLSX from "xlsx";

import LoadingScreen from "../components/LoadingScreen";
import { Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";

const GET_PERFORMANCE_BY_FT = gql`
  query GetPerformanceByFT($projectId: String!) {
    getPerformanceByFT(project_id: $projectId) {
      message
      status
      data {
        id
        name
        monthlyPerformance {
          month
          year
          percentage
        }
        monthlyVisitedFarms {
          month
          year
          totalVisitedFarms
        }
        monthlyRating {
          month
          year
          avgScore
        }
        monthlyAttDifference {
          month
          year
          difference
          ftAttendance
          aaAttendance
        }
      }
    }
  }
`;

const FTPerformance = () => {
  const { activeProject } = useOutletContext();
  const { loading, error, data } = useQuery(GET_PERFORMANCE_BY_FT, {
    variables: { projectId: activeProject },
  });

  const [selectedFT, setSelectedFT] = useState(null);
  const [selectWidth, setSelectWidth] = useState("auto");
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current && data?.getPerformanceByFT?.data.length > 0) {
      const longestOptionWidth = Math.max(
        ...data.getPerformanceByFT.data.map((ft) => ft.name.length * 8)
      );
      setSelectWidth(`${longestOptionWidth}px`);
    }
  }, [data]);

  const handleFTSelect = (selectedOption) => {
    const selectedFTData = data?.getPerformanceByFT?.data.find(
      (ft) => ft.id === selectedOption.value
    );
    setSelectedFT(selectedFTData);
  };

  const formatLabel = ({ month, year }) => `${month}/${year}`;

  const exportToExcel = () => {
    if (!data || !data.getPerformanceByFT || !data.getPerformanceByFT.data)
      return;

    const fileName = `FT_Performance_Data.xlsx`;
    const wsData = [];

    data.getPerformanceByFT.data.forEach((ft) => {
      ft.monthlyPerformance.forEach((mp, index) => {
        const rowData = {
          Name: ft.name,
          Month: `${mp.month}/${mp.year}`,
          "% FFGs Submitted": mp.percentage || "",
          "Total Visited Farms": "",
          "Average Performance Grade": "",
          "TO vs AA Attendance difference": "",
          "FT Attendance": "",
          "AA Attendance": "",
        };

        const mvf = ft.monthlyVisitedFarms.find(
          (item) => item.month === mp.month && item.year === mp.year
        );
        if (mvf) rowData["Total Visited Farms"] = mvf.totalVisitedFarms;

        const mr = ft.monthlyRating.find(
          (item) => item.month === mp.month && item.year === mp.year
        );
        if (mr) rowData["Average Performance Grade"] = mr.avgScore;

        const mad = ft.monthlyAttDifference.find(
          (item) => item.month === mp.month && item.year === mp.year
        );
        if (mad) {
          rowData["TO vs AA Attendance difference"] = mad.difference;
          rowData["FT Attendance"] = mad.ftAttendance;
          rowData["AA Attendance"] = mad.aaAttendance;
        }

        wsData.push(rowData);
      });
    });

    const ws = XLSX.utils.json_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "FT_Performance");
    XLSX.writeFile(wb, fileName);
  };

  if (loading) return <LoadingScreen />;

  if (error)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography color="error">Error loading data</Typography>
      </div>
    );

  return (
    <div className="ft-performance-container">
      <h4 className="page-title">Select a Farmer Trainer</h4>
      <div className="select-download-container">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : error ? (
          <p className="error-message">
            Error: Unable to fetch data. Refresh page, if it doesn't work please
            contact the PIMA team.
          </p>
        ) : (
          <>
            <Select
              className="select"
              options={data?.getPerformanceByFT?.data.map((ft) => ({
                label: ft.name,
                value: ft.id,
              }))}
              onChange={handleFTSelect}
              placeholder="Search Farmer Trainers..."
              value={
                selectedFT
                  ? { label: selectedFT.name, value: selectedFT.id }
                  : null
              }
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              }}
              menuPortalTarget={document.body}
              menuPlacement="auto"
              width={selectWidth}
              ref={selectRef}
            />
            <button className="download-button" onClick={exportToExcel}>
              Download Performance Data
            </button>
          </>
        )}
      </div>

      {selectedFT && (
        <div>
          <h3 className="section-title">Graphs for {selectedFT.name}</h3>
          <div className="graph-container">
            <div className="graph">
              <h4>% of FFGs submitted on PIMA per month</h4>
              <BarChart
                width={600}
                height={300}
                data={selectedFT.monthlyPerformance}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={({ month, year }) => formatLabel({ month, year })}
                  allowDataOverflow={false}
                />
                <YAxis ticks={[0, 20, 40, 60, 80, 100]} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="percentage"
                  name="% FFGs Submitted"
                  fill="#82ca9d"
                />
              </BarChart>
            </div>

            <div className="graph">
              <h4>Number of Farm Visits performed per month</h4>
              <LineChart
                width={600}
                height={300}
                data={selectedFT.monthlyVisitedFarms}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={({ month, year }) => formatLabel({ month, year })}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="totalVisitedFarms"
                  name="Farm Visits"
                  stroke="#8884d8"
                />
              </LineChart>
            </div>

            <div className="graph">
              <h4>FT Average Performance Grade per month</h4>
              <LineChart
                width={600}
                height={300}
                data={selectedFT.monthlyRating}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={({ month, year }) => formatLabel({ month, year })}
                />
                <YAxis ticks={[0, 1, 2, 3, 4]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="avgScore"
                  name="Average Performance Grade"
                  stroke="#ff7300"
                />
              </LineChart>
            </div>

            <div className="graph">
              <h4>FT VS AA Attendance Numbers</h4>
              <LineChart
                width={600}
                height={300}
                data={selectedFT.monthlyAttDifference}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={({ month, year }) => formatLabel({ month, year })}
                />
                <YAxis ticks={[0, 20, 40, 60]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="difference"
                  name="TO vs AA Attendance difference"
                  stroke="#ff0000"
                />
                <Line
                  type="monotone"
                  dataKey="ftAttendance"
                  name="FT Attendance"
                  stroke="#00ff00"
                />
                <Line
                  type="monotone"
                  dataKey="aaAttendance"
                  name="AA Attendance"
                  stroke="#0000ff"
                />
              </LineChart>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FTPerformance;
