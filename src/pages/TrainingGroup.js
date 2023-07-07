import React from "react";
import Table from "../components/Table/Table";
import Statsframe from "../features/statistics/Statsframe";

const TrainingGroup = ({ trainingGroups }) => {
  const columns = [
    { Header: "Training Group ID", accessor: "tg_id" },
    { Header: "Training Group Name", accessor: "tg_name" },
    { Header: "TNS ID", accessor: "tns_id" },
    { Header: "No of Participants", accessor: "total_participants" },
    { Header: "Business Advisor", accessor: "business_advisor" },
    { Header: "Farmer Trainer", accessor: "farmer_trainer" },
  ];

  console.log("trainingGroups:", trainingGroups);

  const rows = trainingGroups
    ? trainingGroups.map((trainingGroup) => ({
        tg_id: trainingGroup.tg_id,
        tg_name: trainingGroup.tg_name,
        tns_id: trainingGroup.tns_id,
        total_participants: trainingGroup.total_participants,
        business_advisor: trainingGroup.business_advisor.join(", "),
        farmer_trainer: trainingGroup.farmer_trainer,
      }))
    : [];

  console.log("columns:", columns);
  console.log("rows:", rows);

  return (
    <div>
      <h1>Project Name heading</h1>
      <Statsframe />
      {trainingGroups && trainingGroups.length > 0 ? (
        <Table columns={columns} data={rows} />
      ) : (
        <div className="no__data">
          <h1>No Data Found</h1>
        </div>
      )}
    </div>
  );
};

export default TrainingGroup;
