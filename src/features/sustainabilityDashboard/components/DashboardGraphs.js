import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const DashboardGraphs = ({
  millsCount,
  basCount,
  visitsPerWeekData,
  ownershipData,
  exportingStatusData,
}) => {
  return (
    <>
      {/* Summary stats */}
      <div className="graphs__stats">
        <div className="stat-card">
          <h2>Total Registered Wet Mills</h2>
          <p>{millsCount}</p>
        </div>
        <div className="stat-card">
          <h2>Total BAs</h2>
          <p>{basCount}</p>
        </div>
      </div>

      {/* Visits per week */}
      <div className="sustain__card sustain__full">
        <h3 className="sustain__cardTitle">Wet Mill Visits per Week</h3>
        <Line
          data={{
            labels: visitsPerWeekData.map((d) => d.week),
            datasets: [
              {
                label: "Wet Mill Visits",
                data: visitsPerWeekData.map((d) => d.count),
                fill: true,
                borderColor: "#087c8f",
                backgroundColor: "rgba(8, 124, 143, 0.15)",
                tension: 0.4,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: "top" } },
            scales: {
              x: { grid: { display: false } }, y: {
                ticks: {
                  // Force integer ticks
                  callback: function (value) {
                    return Number.isInteger(value) ? value : '';
                  },
                  stepSize: 1, // Optional: ensures spacing is in whole numbers
                }
              }
            },
          }}
          height={200}
        />
      </div>

      {/* Four-grid charts */}
      <div className="sustain__grid">
        {/* Ownership Type */}
        <div className="sustain__card">
          <h3 className="sustain__cardTitle">Ownership Type</h3>
          <Pie
            data={{
              labels: ownershipData.map((d) => d.label),
              datasets: [
                {
                  data: ownershipData.map((d) => d.count),
                  backgroundColor: ["#087c8f", "#cccccc"],
                  borderColor: "#ffffff",
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: "top" } },
            }}
            height={200}
          />
        </div>

        {/* Exporter Status */}
        <div className="sustain__card">
          <h3 className="sustain__cardTitle">Exporter Status</h3>
          <Pie
            data={{
              labels: exportingStatusData.map((d) => d.label),
              datasets: [
                {
                  data: exportingStatusData.map((d) => d.count),
                  backgroundColor: ["#f7931e", "#333333"],
                  borderColor: "#ffffff",
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: "top" } },
            }}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardGraphs;
