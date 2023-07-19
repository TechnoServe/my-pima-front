import React from "react";
import Table from "../components/Table/Table";
import Statsframe from "../features/statstg/Statsframe";
import Statstscard from "../features/statsts/Statstscard";


const TrainingSession = () => {
  const columns = [
    { Header: "No.", accessor: "num" },
    { Header: "Session Name", accessor: "sess_name" },
    { Header: "Module Name", accessor: "mod_name" },
    { Header: "Training Group", accessor: "tg_name" },
    { Header: "TNS ID", accessor: "tns_id" },
    { Header: "Status", accessor: "status" },
    { Header: "MA", accessor: "ma_name" },
    { Header: "FA", accessor: "fa_name" },
    { Header: "Buisness Advisor", accessor: "ba_name" },
    { Header: "Farmer Trainer", accessor: "ft_name" },
  ];
  const rows = [
    {
      num: "1",
      sess_name: "Session Name",
      mod_name: "Module Name",
      tg_name: "Training Group",
      tns_id: "TNS2345",
      status: "Pending",
      ma_name: "Male Attendance",
      fa_name: "Female Attendance",
      ba_name: "Business Advisor",
      ft_name: "Farmer Trainer",
    },
  ];
  return (
    <div>
      <h1 className="module__heading">Training Sessions</h1>
      <Statstscard/>

      <Table columns={columns} data={rows} />
    </div>
  );
};

// Rest of the code remains the same
export default TrainingSession;