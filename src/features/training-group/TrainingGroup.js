import React from "react";
import Table from "../../components/Table/Table";
import Statsframe from "./statstg/Statsframe";
import { useOutletContext } from "react-router-dom";

const TrainingGroup = () => {
  const { trainingGroups, filter, setFilter, setFilteredGroups, projectStats } =
    useOutletContext();

  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "tg_name",
      name: "FFG Name",
      selector: (row) => row.tg_name,
      sortable: true,
    },
    {
      id: "tns_id",
      name: "TNS ID",
      selector: (row) => row.tns_id,
      sortable: true,
    },
    {
      id: "total_participants",
      name: "No of Registered Farmers",
      selector: (row) => row.total_participants,
      sortable: true,
    },
    {
      id: "business_advisor",
      name: "Business Advisor",
      selector: (row) => row.business_advisor,
      sortable: true,
    },
    {
      id: "farmer_trainer",
      name: "Farmer Trainer",
      selector: (row) => row.farmer_trainer,
      sortable: true,
    },
    // {
    //   id: "status",
    //   name: "Status",
    //   selector: (row) => (
    //     <div>
    //       {row.status === "Active" ? (
    //         <Chip label={"Active"} color="success" variant="outlined" />
    //       ) : (
    //         <Chip label={"Inactive"} color="error" variant="outlined" />
    //       )}
    //     </div>
    //   ),
    //   sortable: true,
    // },
  ];

  const rows = trainingGroups
    ? trainingGroups.map((trainingGroup, index) => ({
        num: index + 1,
        tg_id: trainingGroup.tg_id,
        tg_name: trainingGroup.tg_name,
        tns_id: trainingGroup.tns_id || "N/A",
        total_participants: trainingGroup.total_participants,
        business_advisor: trainingGroup.business_advisor,
        farmer_trainer: trainingGroup.farmer_trainer,
        status: trainingGroup.status,
      }))
    : [];

  const tableRowItem = "traingroup";

  return (
    <div>
      <h1 className="module__heading">Focal Farmer Groups</h1>
      {trainingGroups.length > 0 ? (
        <div>
          <Statsframe
            statistics={projectStats}
            // ={participants.length}
            trainingGroups={trainingGroups}
          />
          <Table
            columns={columns}
            data={rows}
            filter={filter}
            setFilter={setFilter}
            setFilteredGroups={setFilteredGroups}
            tableRowItem={tableRowItem}
          />
        </div>
      ) : (
        <div className="no__data">
          <em>No Active Focal Farmer Groups Found</em>
        </div>
      )}
    </div>
  );
};

export default TrainingGroup;
