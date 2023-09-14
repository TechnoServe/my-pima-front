import React from "react";
import { Chip } from "@mui/material";
import Table from "../components/Table/Table";
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadParticipantsModal from "../components/Modals/UploadParticipantsModal";
import { useState } from "react";

const Participants = ({
  participants,
  allAttendances,
  trainingGroups,
  selectedProject,
  projects,
}) => {
  const [open, setOpen] = useState(false);

  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "full_name",
      name: "Full Name",
      selector: (row) => row.full_name,
      sortable: true,
    },
    {
      id: "gender",
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      id: "location",
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      id: "tns_id",
      name: "TNS Id",
      selector: (row) => row.tns_id,
      sortable: true,
    },
    {
      id: "training_group",
      name: "Training Group",
      selector: (row) =>
        trainingGroups
          ? trainingGroups.find((tg) => tg.tg_id === row.tg_id)
            ? trainingGroups.find((tg) => tg.tg_id === row.tg_id).tg_name
            : "N/A"
          : "N/A",
      sortable: true,
    },
    {
      id: "household_id",
      name: "HouseHold",
      selector: (row) => row.household_id,
      sortable: true,
    },
    {
      id: "primary_household_member",
      name: "Primary HouseHold Member",
      selector: (row) => (
        <div>
          {row.primary_household_member === "Yes" ? (
            <Chip label={"Yes"} color="success" variant="outlined" />
          ) : (
            <Chip label={"No"} color="error" variant="outlined" />
          )}
        </div>
      ),
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
    {
      id: "farmer_trainer",
      name: "Farmer Trainer",
      selector: (row) => row.farmer_trainer,
      sortable: true,
    },
    {
      id: "business_advisor",
      name: "Business Advisor",
      selector: (row) => row.business_advisor,
      sortable: true,
    },
  ];
  const tableRowItem = "participants";

  const rows = participants
    ? participants.map((participant, index) => ({
        num: index + 1,
        p_id: participant.p_id,
        full_name: participant.full_name,
        gender: participant.gender,
        location: participant.location,
        tns_id: participant.tns_id,
        training_group: participant.training_group,
        household_id: participant.household_id,
        primary_household_member: participant.primary_household_member,
        status: participant.status,
        farmer_trainer: participant.farmer_trainer,
        business_advisor: participant.business_advisor,
      }))
    : [];

  return (
    <div>
      <div className="flex__heading">
        <h1 className="module__heading">Participants View</h1>{" "}
        <FaCloudUploadAlt
          title="Upload New Participants"
          style={{
            fontSize: "30px",
            cursor: "pointer",
            marginLeft: "10px",
            fill: "#00A5A3",
          }}
          onClick={() => setOpen(true)}
        />{" "}
      </div>
      {participants.length > 0 ? (
        <Table
          columns={columns}
          data={rows}
          tableRowItem={tableRowItem}
          allAttendances={allAttendances}
        />
      ) : (
        <div className="no__data">
          <h1 style={{ fontSize: "20px" }}>No Participant Yet</h1>
        </div>
      )}

      <UploadParticipantsModal
        open={open}
        setOpen={setOpen}
        navigatedProject={
          projects.find((project) => project.sf_project_id === selectedProject)
            .project_name
        }
      />
    </div>
  );
};

export default Participants;
