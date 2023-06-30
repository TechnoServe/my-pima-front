import React from "react";
import DataTable from "../components/Table/DataTable";

const TrainingGroup = ({ trainingGroups }) => {
  const columns = [
    "Training Group ID",
    "Training Group Name",
    "TNS ID",
    "No of Participants",
    "Buisness Advisor",
    "Farmer Trainer",
  ];
  function createData(...rowData) {
    return rowData;
  }

  const rows = trainingGroups.map((trainingGroup) =>
    createData(
      trainingGroup.tg_id,
      trainingGroup.tg_name,
      trainingGroup.tns_id,
      trainingGroup.total_participants,
      trainingGroup.business_advisor.join(", "),
      trainingGroup.farmer_trainer
    )
  );

  return (
        <div className="page__content">
        <h1>Project Name</h1>
      {trainingGroups.length > 0 ? (
        <DataTable columns={columns} rows={rows} />
      ) : (
        <div className="no__data">
          <h1>No Data Found</h1>
        </div>
      )}
    </div>
  );
};

export default TrainingGroup;
