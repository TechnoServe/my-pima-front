import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Chip, Typography } from "@mui/material";
import Table from "../components/Table/Table";
import { toast } from "react-hot-toast";
import { GET_TRAINING_SESSIONS_PER_PROJECT } from "../graphql/queries/trainingSessionsRequests";
import LoadingScreen from "../components/LoadingScreen";

const TrainingSession = ({ selectedProject }) => {
  const [trainingSessions, setTrainingSessions] = useState([]);
  const { data, error, loading } = useQuery(GET_TRAINING_SESSIONS_PER_PROJECT, {
    variables: { sfProjectId: selectedProject },
  });

  useEffect(() => {
    if (data) {
      const trainingSessionsData = data.trainingSessionsByProject;
      setTrainingSessions(
        trainingSessionsData.status === 200
          ? trainingSessionsData.trainingSessions
          : []
      );
    }

    if (error) {
      toast.error(error.message);
    }
  }, [data, error]);

  const columns = [
    {
      id: "num",
      name: "No.",
      selector: (row) => row.num,
      sortable: true,
      grow: 1,
    },
    {
      id: "ts_module",
      name: "Session Name",
      selector: (row) => row.ts_module,
      sortable: true,
      grow: 2,
    },
    {
      id: "ts_group",
      name: "Training Group",
      selector: (row) => row.ts_group,
      sortable: true,
      grow: 2,
    },
    {
      id: "tns_id",
      name: "TNS ID",
      selector: (row) => row.tns_id,
      sortable: true,
    },
    {
      id: "farmer_trainer",
      name: "Farmer Trainer",
      selector: (row) => row.farmer_trainer,
      sortable: true,
      grow: 2,
    },
    {
      id: "total_males",
      name: "MA",
      selector: (row) => row.total_males,
      sortable: true,
      grow: 1,
    },
    {
      id: "total_females",
      name: "FA",
      selector: (row) => row.total_females,
      sortable: true,
      grow: 1,
    },
    {
      id: "has_image",
      name: "Has Image?",
      selector: (row) => (
        <div>
          {row.has_image ? (
            <Chip label={"Yes"} color="success" variant="outlined" />
          ) : (
            <Chip label={"No"} color="error" variant="outlined" />
          )}
        </div>
      ),
      sortable: true,
    },
    {
      id: "is_verified",
      name: "Is Session Verified?",
      selector: (row) => (
        <div>
          {row.is_verified ? (
            <Chip label={"Yes"} color="success" variant="outlined" />
          ) : (
            <Chip label={"No"} color="error" variant="outlined" />
          )}
        </div>
      ),
      sortable: true,
    },
    {
      id: "session_image_status",
      name: "Session Image Status",
      grow: 2,
      selector: (row) => (
        <div>
          {!row.is_verified ? (
            <Chip
              label={"not_verified"}
              color="secondary"
              variant="outlined"
              title={"not_verified"}
            />
          ) : (
            <Chip
              label={row.session_image_status}
              color="success"
              variant="outlined"
              title={row.session_image_status}
            />
          )}
        </div>
      ),
      sortable: true,
    },
    {
      id: "session_date",
      name: "Session Date",
      selector: (row) => row.session_date,
      sortable: true,
      grow: 2,
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
        tns_id: trainingSession.tns_id || "N/A",
        farmer_trainer: trainingSession.farmer_trainer,
        ts_status: trainingSession.ts_status,
        total_males: trainingSession.total_males,
        total_females: trainingSession.total_females,
        has_image: trainingSession.has_image,
        is_verified: trainingSession.is_verified,
        session_image_status: trainingSession.session_image_status,
        session_date: trainingSession.session_date,
      }))
    : [];

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="circular_progress">
        <Typography color="error">Error loading data</Typography>
      </div>
    );
  }

  return (
    <div className="page__container">
      <h1 className="module__heading">Training Sessions View</h1>
      {trainingSessions.length > 0 ? (
        <Table columns={columns} data={rows} tableRowItem={tableRowItem} />
      ) : (
        <div className="no__data">
          <h1 style={{ fontSize: "20px" }}>No Training Sessions Yet</h1>
        </div>
      )}
    </div>
  );
};

export default TrainingSession;
