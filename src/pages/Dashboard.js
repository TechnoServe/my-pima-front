import React from "react";
import Barchart from "../features/dashboard/barchart";
import Piechart from "../features/dashboard/piechart";

const Dashboard = () => {
  return (
    <div>
      <h1 className="module__heading">Your Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Barchart />
        <Piechart />
      </div>
    </div>
  );
};

export default Dashboard;
