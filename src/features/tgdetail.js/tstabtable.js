import React from "react";
import Table from "../../components/Table/Table";

const Tstabtable = ({ trainingSessions }) => {
  const columns = [
    { Header: "Session Name", accessor: "ts_name" },
    { Header: "Module Name", accessor: "ts_module" },
    { Header: "Status", accessor: "ts_status" },
    { Header: "MA", accessor: "total_males" },
    { Header: "FA", accessor: "total_females" },
  ];

  return (
    <div>
      <Table columns={columns} data={trainingSessions} />
    </div>
  );
};

export default Tstabtable;
