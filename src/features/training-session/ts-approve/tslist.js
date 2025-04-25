import React, { useEffect, useState } from "react";
import Statsframe from "./statsframe";
import { Chip } from "@mui/material";
import Table from "../../components/Table/Table";
import { useQuery } from "@apollo/client";
import { GET_TRAINING_MODULES_PER_PROJECT } from "../../graphql/queries/trainingModulesRequests";

const TSApprove = ({
  trainingSessions,
  filter,
  setFilter,
  selectedProject,
}) => {
  const [filtSessions, setFiltSessions] = useState([]);
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
      name: "FFG",
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
    // {
    //   id: "has_image",
    //   name: "Has Image?",
    //   selector: (row) => (
    //     <div>
    //       {row.has_image ? (
    //         <Chip label={"Yes"} color="success" variant="outlined" />
    //       ) : (
    //         <Chip label={"No"} color="error" variant="outlined" />
    //       )}
    //     </div>
    //   ),
    //   sortable: true,
    // },
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
              label={"Review Image"}
              color="warning"
              variant="filled"
              title={"Review Image"}
              size={'small'}
            />
          ) : (
            <Chip
              label={row.session_image_status}
              color="success"
              variant="outlined"
              title={row.session_image_status}
              size={'small'}
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

  const tableRowItem = "trainsessionapprov";

  const rows =
    filtSessions.length > 0
      ? filtSessions.map((trainingSession, index) => ({
          num: index + 1,
          ts_id: trainingSession.ts_id,
          //ts_name: trainingSession.ts_name,
          ts_module: trainingSession.ts_module,
          ts_group: trainingSession.ts_group,
          tns_id: trainingSession.tns_id || "N/A",
          farmer_trainer: trainingSession.farmer_trainer,
          //ts_status: trainingSession.ts_status,
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
    const projectModulesData = getProjectModules.data?.getTrainingModulesByProject;
    const isDataValid =
      projectModulesData &&
      projectModulesData.status === 200 &&
      trainingSessions &&
      trainingSessions.length > 0;
  
    if (isDataValid) {
      const projectModules = projectModulesData.training_modules;
      const currentModuleTitle =
        projectModules
          .filter((module) => module.tm_is_current)
          .sort((a, b) => new Date(b.tm_date) - new Date(a.tm_date))[0]?.tm_title || "";
  
      const filteredSessions = trainingSessions
        .filter((session) => session.ts_module === currentModuleTitle && session.session_date);
  
      setFiltSessions(filteredSessions);
    }
  }, [getProjectModules.data, trainingSessions]);
  
  return (
    <div>
      <h1 className="module__heading">
        Image Verification -{" "}
        {filtSessions.length > 0 ? filtSessions[0].ts_module : ""}{" "}
      </h1>
      <div>
        <Statsframe
          statistics={[]}
          totalParticipants={0}
          currentSessions={filtSessions}
        />
        <Table
          columns={columns}
          data={rows}
          tableRowItem={tableRowItem}
          filter={filter}
          setFilter={setFilter}
          //setFilteredSessions={setFilteredSessions}
          selectedProject={selectedProject}
        />
      </div>
    </div>
  );
};

export default TSApprove;
