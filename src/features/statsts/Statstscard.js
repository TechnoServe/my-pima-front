import React from "react";
import "./tscard.css";
import { MdMan, MdWoman } from "react-icons/md";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const Statstscard = ({ stats }) => {
  const percentage = 66;

  // get percentage of total_males from stats
  let totalMales = 0;
  let totalFemales = 0;

  stats.forEach((item) => {
    totalMales += isNaN(item.total_males) ? 0 : Number(item.total_males);
    totalFemales += isNaN(item.total_females) ? 0 : Number(item.total_females);
  });

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
          <div style={{ marginRight: "50px" }}>
            <div className="mafa__attendance" style={{ paddingBottom: "10px" }}>
              <div className="cardts__icon">
                <MdMan size={22} />
              </div>
              <div>
                <p className="attend__text">Male Attendance</p>
                <p className="attend__figure">
                  {maleAttendancePercentage.toFixed(2)}%
                </p>
              </div>
            </div>
            <div className="mafa__attendance">
              <div className="cardts__icon">
                <MdWoman size={22} />
              </div>
              <div>
                <p className="attend__text">Female Attendance</p>
                <p className="attend__figure">
                  {femaleAttendancePercentage.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px" }}>
            <CircularProgressbarWithChildren
              value={percentage}
              styles={buildStyles({
                rotation: 0.5,
                strokeLinecap: "round",
                textSize: "20px",
                pathTransitionDuration: 0.5,
                pathColor: "rgba(244, 103, 0, 1)",
                textColor: "rgba(244, 103, 0, 1)",
                trailColor: "#ECF3FE",
              })}
            >
              <div style={{ position: "absolute", top: "15px" }}>
                <p
                  style={{
                    fontSize: "20px",
                    textAlign: "center",
                    color: "#F46700",
                    fontWeight: "600",
                  }}
                >
                  {percentage} %
                </p>
                <p style={{ fontSize: "10px", fontWeight: "500", color: "" }}>
                  Attendance
                </p>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statstscard;
