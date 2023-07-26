import React from "react";
import Table from "../components/Table/Table";
import Statstscard from "../features/statsts/Statstscard";

const TrainingSession = ({
  trainingSessions,
  filter,
  setFilter,
  setFilteredSessions,
}) => {
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
    // { Header: "Session Images", accessor: "session_images" },
    { Header: "Session Date", accessor: "session_date" },
  ];

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
        // session_images: trainingSession.session_images,
        session_date: trainingSession.session_date,
      }))
    : [];

  return (
    <div>
      <h1 className="module__heading">Training Sessions</h1>
      {trainingSessions && trainingSessions.length > 0 && (
        <Statstscard stats={trainingSessions} />
      )}

      <Table
        columns={columns}
        data={rows}
        filter={filter}
        setFilter={setFilter}
        setFilteredSessions={setFilteredSessions}
      />
    </div>
  );
};

// Rest of the code remains the same
export default TrainingSession;
