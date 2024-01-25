import React from "react";
import { Chip } from "@mui/material";
import Table from "../components/Table/Table";
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadParticipantsModal from "../components/Modals/UploadParticipantsModal";
import {
  GET_PARTICIPANTS_PER_PROJECT,
  SYNC_PARTICIPANTS_WITH_COMMCARE,
} from "../graphql/queries/participantsRequests";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";

const Participants = ({
  participants,
  allAttendances,
  trainingGroups,
  selectedProject,
  projects,
}) => {
  const [open, setOpen] = useState(false);
  const [sendToCcCount, setSendToCcCount] = useState();
  const [isSyncing, setIsSyncing] = useState(false);

  const [SyncParticipants] = useMutation(SYNC_PARTICIPANTS_WITH_COMMCARE);

  const participantsPerProject = useQuery(GET_PARTICIPANTS_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });

  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "full_name",
      name: "Full Name",
      selector: (row) => row.first_name + " " + row.last_name,
      sortable: true,
    },
    {
      id: "gender",
      name: "Gender",
      selector: (row) => row.gender === "m"? "Male": "Female",
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
      name: "TNS ID",
      selector: (row) => row.tns_id,
      sortable: true,
    },
    {
      id: "training_group",
      name: "Training Group",
      selector: (row) => row.training_group,
      sortable: true,
    },
    {
      id: "household_id",
      name: "HH Number",
      selector: (row) => row.hh_number,
      sortable: true,
    },
    {
      id: "primary_household_member",
      name: "Primary HouseHold Member",
      selector: (row) => (
        <div>
          {row.farmer_number === "1" ? (
            <Chip label={"1"} color="success" variant="outlined" />
          ) : (
            <Chip label={"2"} color="error" variant="outlined" />
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

  console.log("participants", participants.length);
  console.log("groups", trainingGroups.length);

  const rows = participants
    ? participants.map((participant, index) => ({
        num: index + 1,
        Project: projects.find(
          (project) => project.sf_project_id === selectedProject
        ).project_name,
        p_id: participant.p_id,
        first_name: participant.first_name,
        middle_name: participant.middle_name ? participant.middle_name : "",
        last_name: participant.last_name ? participant.last_name : "",
        gender: participant.gender,
        age: participant.age,
        coffee_tree_numbers: participant.coffee_tree_numbers,
        coop_membership_number: participant.coop_membership_number
          ? participant.coop_membership_number
          : "",
        phone_number: participant.phone_number,
        farmer_sf_id: participant.p_id,
        hh_number: participant.hh_number,
        sf_household_id: participant.household_id,
        ffg_id: participant.ffg_id,
        location: participant.location,
        tns_id: participant.tns_id,
        training_group:
          trainingGroups && trainingGroups.length > 0
            ? trainingGroups.find(
                (tg) => tg.tg_id === participant.training_group
              )?.tg_name || "N/A"
            : "N/A",
        farmer_number: participant.primary_household_member,
        status: participant.status,
        farmer_trainer: participant.farmer_trainer,
        business_advisor: participant.business_advisor,
        create_in_commcare: participant.create_in_commcare,
      }))
    : [];

  const userDetails = JSON.parse(window.localStorage.getItem("myPimaUserData"));

  useEffect(() => {
    // Calculate the count of active participants
    const sendToCcCount = participants.filter(
      (participant) => participant.create_in_commcare === "false"
    );
    setSendToCcCount(sendToCcCount.length);
  }, [participants]);

  const handleTakeAction = async () => {
    setIsSyncing(true);

    await SyncParticipants({
      variables: {
        projectId: selectedProject,
      },
    })
      .then(async (res) => {
        // refetch participants per project
        await participantsPerProject
          .refetch()
          .then(() => {
            // setUploadResult(res.data.uploadParticipants);
            setIsSyncing(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);

        setIsSyncing(false);
      });
  };

  return (
    <div>
      {/* Display the dialog box for active participants */}
      {sendToCcCount > 0 && (
        <div className="active-participants-dialog">
          <p>
            You currently have <strong>{sendToCcCount}</strong> participants who
            have not been sent to CommCare. Please download the participant
            list, review the database, and ensure all information is verified
            before syncing with CommCare.
          </p>
          <button
            className="take-action-button"
            onClick={() => handleTakeAction()}
            disabled={isSyncing}
          >
            {isSyncing ? "Processing..." : "Send to Commcare"}
          </button>
        </div>
      )}

      <div className="flex__heading">
        <h1 className="module__heading">Registered Farmers View</h1>{" "}
        {(userDetails?.role === "super_admin" ||
          userDetails?.role === "ci_leadership" ||
          userDetails?.role === "senior_business_advisor" ||
          userDetails?.role === "project_manager" ||
          userDetails?.role === "mel_analyst") && (
          <FaCloudUploadAlt
            title="Upload New Participants"
            style={{
              fontSize: "30px",
              cursor: "pointer",
              marginLeft: "10px",
              fill: "#00A5A3",
            }}
            onClick={() => setOpen(true)}
          />
        )}{" "}
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
          <h1 style={{ fontSize: "20px" }}>No Registered Farmers Yet</h1>
        </div>
      )}

      <UploadParticipantsModal
        open={open}
        setOpen={setOpen}
        navigatedProject={
          projects.find((project) => project.sf_project_id === selectedProject)
            .project_name
        }
        sfProjectId={selectedProject}
      />
    </div>
  );
};

export default Participants;
