import React, { useEffect } from "react";
import { Chip } from "@mui/material";
import Table from "../components/Table/Table";
import { useQuery } from "@apollo/client";
import { GET_TRAINING_MODULES_PER_PROJECT } from "../graphql/queries/trainingModulesRequests";

const TrainingSession = ({
  trainingSessions,
  filter,
  setFilter,
  setFilteredSessions,
  selectedProject,
}) => {
  const columns = [
    {
      id: "num",
      name: "No.",
      selector: (row) => row.num,
      sortable: true,
      grow: 1,
    },
    {
      id: "ts_name",
      name: "Session Name",
      selector: (row) => row.ts_name,
      sortable: true,
      grow: 2,
    },
    {
      id: "ts_module",
      name: "Module Name",
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
      name: "TNS Id",
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
      id: "ts_status",
      name: "Status",
      selector: (row) => (
        <div>
          {row.ts_status === "Active" ? (
            <Chip label={"Active"} color="success" variant="outlined" />
          ) : (
            <Chip label={"Inactive"} color="error" variant="outlined" />
          )}
        </div>
      ),
      sortable: true,
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

  const getProjectModules = useQuery(GET_TRAINING_MODULES_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });

  useEffect(() => {
    if (
      getProjectModules.data &&
      getProjectModules.data.getTrainingModulesByProject &&
      getProjectModules.data.getTrainingModulesByProject.status === 200 &&
      trainingSessions &&
      trainingSessions.length > 0
    ) {
      if (
        getProjectModules.data.getTrainingModulesByProject.training_modules.filter(
          (module) =>
            trainingSessions.map((d) => d.ts_module).includes(module.tm_title)
        ).length > 0
      ) {
        setFilteredSessions(
          trainingSessions.filter(
            (session) =>
              session.ts_module ===
              getProjectModules.data.getTrainingModulesByProject.training_modules
                .filter((module) =>
                  trainingSessions
                    .map((d) => d.ts_module)
                    .includes(module.tm_title)
                )
                .sort((a, b) => new Date(b.tm_date) - new Date(a.tm_date))[0]
                .tm_title
          )
        );
      }
    }
  }, [selectedProject]);

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
        selectedProject={selectedProject}
      />
    </div>
  );
};

export default TrainingSession;
