import React, { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import Statsframe from "../features/statstg/Statsframe";
import { useQuery } from "@apollo/client";
import { BeatLoader } from "react-spinners";
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
    { Header: "No.", accessor: "num" },
    { Header: "Training Group Name", accessor: "tg_name" },
    { Header: "TNS ID", accessor: "tns_id" },
    { Header: "No of Participants", accessor: "total_participants" },
    { Header: "Business Advisor", accessor: "business_advisor" },
    { Header: "Farmer Trainer", accessor: "farmer_trainer" },
  ];

  const rows = trainingGroups
    ? trainingGroups.map((trainingGroup, index) => ({
        num: index + 1,
        tg_id: trainingGroup.tg_id,
        tg_name: trainingGroup.tg_name,
        tns_id: trainingGroup.tns_id,
        total_participants: trainingGroup.total_participants,
        business_advisor: trainingGroup.business_advisor,
        farmer_trainer: trainingGroup.farmer_trainer,
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
      {!trainingGroups ? (
        <BeatLoader color="#0D3C61" size={20} />
      ) : (
        <div>
          {data && data.getProjectStatistics.status === 200 ? (
            <Statsframe
              statistics={data.getProjectStatistics.statistics}
              totalParticipants={totalParticipants}
            />
          ) : loading ? (
            <BeatLoader
              color="#0D3C61"
              size={15}
              style={{ display: "flex", justifyContent: "center" }}
            />
          ) : (
            <div className="no__data">
              <h1 style={{ fontSize: "20px" }}>No Statistics Yet</h1>
            </div>
          )}
          {trainingGroups && trainingGroups.length > 0 ? (
            <Table
              columns={columns}
              data={rows}
              filter={filter}
              setFilter={setFilter}
              setFilteredGroups={setFilteredGroups}
              tableRowItem={tableRowItem}
            />
          ) : (
            <div className="no__data">
              <em>No Active Group Found</em>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrainingGroup;
