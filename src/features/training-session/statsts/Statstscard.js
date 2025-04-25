import React from "react";
import "./tscard.css";
import { PieChart } from "@mui/x-charts";

const Statstscard = ({ stats }) => {
  // get percentage of total_males from stats
  let totalMales = 0;
  let totalFemales = 0;

  totalMales += isNaN(stats.total_males) ? 0 : Number(stats.total_males);
  totalFemales += isNaN(stats.total_females) ? 0 : Number(stats.total_females);

  const totalAttendance = totalMales + totalFemales;

  const maleAttendancePercentage =
    totalAttendance > 0 ? (totalMales / totalAttendance) * 100 : 0;
  const femaleAttendancePercentage =
    totalAttendance > 0 ? (totalFemales / totalAttendance) * 100 : 0;

  return (
    <div>
      <div className="cardts__container">
        <p
          style={{ color: "#7D7F88", fontWeight: "600", paddingBottom: "10px" }}
        >
          Total Attendance
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ width: "300px" }}>
            {maleAttendancePercentage > 0 || femaleAttendancePercentage > 0 ? (
              <PieChart
                series={[
                  {
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 65,
                    data: [
                      {
                        id: 0,
                        value: maleAttendancePercentage.toFixed(1),
                        label: "Male",
                        color: "#3F51B5",
                      },
                      {
                        id: 1,
                        value: femaleAttendancePercentage.toFixed(1),
                        label: "Female",
                        color: "#FF4081",
                      },
                    ],
                  },
                ]}
                width={230}
                height={200}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <p>No data to display</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statstscard;
