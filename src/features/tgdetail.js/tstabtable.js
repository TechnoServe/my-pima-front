import React from "react";
import Table from "../../components/Table/Table";

const Tstabtable = ({ trainingSessions }) => {
  const columns = [
    { Header: "No.", accessor: "num" },
    { Header: "Session Name", accessor: "ts_name" },
    { Header: "Module Name", accessor: "ts_module" },
    { Header: "Training Group", accessor: "ts_group" },
    { Header: "TNS Id", accessor: "tns_id" },
    { Header: "Farmer Trainer", accessor: "farmer_trainer" },
    { Header: "Status", accessor: "ts_status" },
    { Header: "MA", accessor: "total_males" },
    { Header: "FA", accessor: "total_females" },
    { Header: "Session Date", accessor: "session_date" },
  ];

  const tableRowItem = "trainsession";

  const rows = trainingSessions
    ? trainingSessions.map((trainingSession, index) => ({
        num: index + 1,
        ts_id: trainingSession.ts_id,
        ts_name: trainingSession.ts_name,
        ts_module: trainingSession.ts_module,
        ts_group: trainingSession.ts_group,
        tns_id: trainingSession.tns_id,
        farmer_trainer: trainingSession.farmer_trainer,
        ts_status: trainingSession.ts_status,
        total_males: trainingSession.total_males,
        total_females: trainingSession.total_females,
        session_date: trainingSession.session_date,
      }))
    : [];

  return (
    <div>
      <Table columns={columns} data={rows} tableRowItem={tableRowItem} />
    </div>
  );
};

export default Tstabtable;
