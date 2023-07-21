import React from "react";
import Table from "../../components/Table/Table";

const Tstabtable = ({ trainingSessions }) => {
  const columns = [
    { Header: "Session Name", accessor: "ts_name" },
    { Header: "Module Name", accessor: "ts_module" },
    { Header: "Farmer Trainer", accessor: "farmer_trainer" },
    { Header: "Status", accessor: "ts_status" },
    { Header: "MA", accessor: "total_males" },
    { Header: "FA", accessor: "total_females" },
    { Header: "Session Date", accessor: "session_date" },
  ];

  return (
    <div>
      <Table columns={columns} data={trainingSessions} />
    </div>
  );
};

export default Tstabtable;
