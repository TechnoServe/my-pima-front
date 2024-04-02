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
} from "recharts";
import { BsDownload } from "react-icons/bs";
import * as XLSX from "xlsx";
import "./AAList.css";

const GET_AAS = gql`
  query GetAAs($project_id: String!) {
    getPerformanceByAA(project_id: $project_id) {
      message
      status
      data {
        id
        name
        monthlyCounts {
          date
          trainingCount
          dpoCount
        }
      }
    }
  }
`;

const AAList = ({ selectedProject }) => {
  const { loading, error, data } = useQuery(GET_AAS, {
    variables: { project_id: selectedProject },
  });
  const [selectedAA, setSelectedAA] = useState(null);
  const [selectWidth, setSelectWidth] = useState("auto");
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current && data?.getPerformanceByAA?.data.length > 0) {
      const longestOptionWidth = Math.max(
        ...(data.getPerformanceByAA.data || []).map((aa) => aa.name.length * 8)
      );
      setSelectWidth(`${longestOptionWidth}px`);
    }
  }, [data]);

  const handleAASelect = (selectedOption) => {
    const selectedAAData = data?.getPerformanceByAA?.data.find(
      (aa) => aa.id === selectedOption.value
    );
    setSelectedAA(selectedAAData);
  };

  const exportToExcel = () => {
    const fileName = "AA_Performance_Data.xlsx";
    const wsData = [];
    data?.getPerformanceByAA?.data.forEach((aa) => {
      aa.monthlyCounts.forEach((mc) => {
        wsData.push({
          Name: aa.name,
          Date: mc.date,
          "DPO Count": mc.dpoCount,
          "Training Count": mc.trainingCount,
        });
      });
    });

    const ws = XLSX.utils.json_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "AA_Performance");
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div className="aa-list-container">
      <h1 className="title">Agronomy Advisor Performance</h1>
      <div className="select-export-container">
        <Select
          className="select"
          options={data?.getPerformanceByAA?.data.map((aa) => ({
            label: aa.name,
            value: aa.id,
          }))}
          onChange={handleAASelect}
          placeholder="Select an Agronomy Advisor..."
          value={
            selectedAA ? { label: selectedAA.name, value: selectedAA.id } : null
          }
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          menuPortalTarget={document.body}
          menuPlacement="auto"
          width={selectWidth}
          ref={selectRef}
        />
        <button className="export-button" onClick={exportToExcel}>
          <BsDownload /> Export to Excel
        </button>
      </div>
      {selectedAA && (
        <div className="graph-container">
          <div className="graph-aa">
            <h4 className="graph-title">
              Performance Chart for {selectedAA.name}
            </h4>
            <LineChart width={600} height={300} data={selectedAA.monthlyCounts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis
                label={{ value: "Count", angle: -90, position: "insideLeft" }}
                ticks={[0, 20, 40, 60]}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="trainingCount"
                name="Training Observations"
                stroke="#007bff"
              />
              <Line
                type="monotone"
                dataKey="dpoCount"
                name="Demo Plot Observations"
                stroke="#28a745"
              />
            </LineChart>
          </div>
        </div>
      )}
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">Error: {error.message}</p>}
    </div>
  );
};

export default AAList;
