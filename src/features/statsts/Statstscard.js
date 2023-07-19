import React from "react";
import "./tscard.css";
import { MdMan, MdWoman } from "react-icons/md";

const Statstscard = () => {
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
              <div
                className="cardts__icon"
              >
                <MdMan  size={22}/>
              </div>
              <div>
                <p className="attend__text">Male Attendance</p>
                <p className="attend__figure">75%</p>
              </div>
            </div>
            <div className="mafa__attendance">
              <div
                className="cardts__icon"
              >
                <MdWoman size={22}/>
              </div>
              <div>
                <p className="attend__text">Female Attendance</p>
                <p className="attend__figure">75%</p>
              </div>
            </div>
          </div>
          <div className="total__attendance">75% Attendance</div>
        </div>
      </div>
    </div>
  );
};

export default Statstscard;
