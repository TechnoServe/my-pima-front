import React, { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import Statsframe from "../features/statstg/Statsframe";
import { useQuery } from "@apollo/client";
import { BeatLoader } from "react-spinners";
import { Chip } from "@mui/material";
import { GET_PROJECT_STATISTICS } from "../graphql/queries/projectsRequests";

const TrainingGroup = ({
  trainingGroups,
  selectedProject,
  filter,
  setFilter,
  setFilteredGroups,
}) => {
  const { data, loading } = useQuery(GET_PROJECT_STATISTICS, {
    variables: { sfProjectId: selectedProject },
  });

  const [totalParticipants, setTotalParticipants] = useState(0); // eslint-disable-line no-unused-vars

  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "tg_name",
      name: "Training Group Name",
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
      name: "No of Participants",
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
    {
      id: "status",
      name: "Status",
      selector: (row) => (
        <div>
          {row.status === "Active" ? (
            <Chip label={"Active"} color="success" variant="outlined" />
          ) : (
            <Chip label={"Inactive"} color="error" variant="outlined" />
          )}
        </div>
      ),
      sortable: true,
    },
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

  useEffect(() => {
    if (trainingGroups) {
      let total = 0;
      trainingGroups.forEach((group) => {
        total += group.total_participants;
      });
      setTotalParticipants(total);
    }
  }, [trainingGroups]);

  const tableRowItem = "traingroup";

  return (
    <div>
      <h1 className="module__heading">Training Groups</h1>
      {trainingGroups.length > 0 ? (
        <div>
          {loading ? (
            <BeatLoader
              color="#0D3C61"
              size={15}
              style={{ display: "flex", justifyContent: "center" }}
            />
          ) : data && data.getProjectStatistics.status === 200 ? (
            <Statsframe
              statistics={data.getProjectStatistics.statistics}
              totalParticipants={totalParticipants}
            />
          ) : (
            <div className="no__data">
              <h1 style={{ fontSize: "20px" }}>No Statistics Yet</h1>
            </div>
          )}
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
          <em>No Active Group Found</em>
        </div>
      )}
    </div>
  );
};

export default TrainingGroup;
