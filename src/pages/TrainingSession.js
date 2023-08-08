import React from "react";
import Table from "../components/Table/Table";

const TrainingSession = ({
  trainingSessions,
  filter,
  setFilter,
  setFilteredSessions,
}) => {
  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "ts_name",
      name: "Session Name",
      selector: (row) => row.ts_name,
      sortable: true,
    },
    {
      id: "ts_module",
      name: "Module Name",
      selector: (row) => row.ts_module,
      sortable: true,
    },
    {
      id: "ts_group",
      name: "Training Group",
      selector: (row) => row.ts_group,
      sortable: true,
    },
    {
      id: "tns_id",
      name: "TNS Id",
      selector: (row) => row.tns_id,
      sortable: true,
    },
    {
      id: "farmer_trainer",
      name: "Farmer Trainer",
      selector: (row) => row.farmer_trainer,
      sortable: true,
    },
    {
      id: "ts_status",
      name: "Status",
      selector: (row) => row.ts_status,
      sortable: true,
    },
    {
      id: "total_males",
      name: "MA",
      selector: (row) => row.total_males,
      sortable: true,
    },
    {
      id: "total_females",
      name: "FA",
      selector: (row) => row.total_females,
      sortable: true,
    },
    {
      id: "session_date",
      name: "Session Date",
      selector: (row) => row.session_date,
      sortable: true,
    },
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
      <h1 className="module__heading">Training Sessions</h1>
      <Table
        columns={columns}
        data={rows}
        tableRowItem={tableRowItem}
        filter={filter}
        setFilter={setFilter}
        setFilteredSessions={setFilteredSessions}
      />
    </div>
  );
};

// Rest of the code remains the same
export default TrainingSession;
