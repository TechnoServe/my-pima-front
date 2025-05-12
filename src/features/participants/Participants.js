import React, { useState, useEffect } from "react";
import { Chip } from "@mui/material";
import Table from "../../components/Table/Table";
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadParticipantsModal from "../../components/Modals/UploadParticipantsModal";
import {
  GET_PARTICIPANTS_PER_PROJECT,
  SYNC_PARTICIPANTS_WITH_COMMCARE,
} from "../../graphql/queries/participantsRequests";
import { GET_ALL_ATTENDANCES } from "../../graphql/queries/attendancesRequests";
import { useMutation, useQuery } from "@apollo/client";
import { BeatLoader } from "react-spinners";
import { Grid } from "@mui/material";
import { useOutletContext } from "react-router-dom";

const Participants = () => {
  const { activeProject, trainingGroups, projects } = useOutletContext();
  const [open, setOpen] = useState(false);
  const [sendToCcCount, setSendToCcCount] = useState();
  const [isSyncing, setIsSyncing] = useState(false);

  const {
    data: participantData,
    loading: participantsLoading,
    error: participantsError,
    refetch: refetchParticipants,
  } = useQuery(GET_PARTICIPANTS_PER_PROJECT, {
    variables: { projectId: activeProject },
    skip: !activeProject,
  });

  const [allAttendances, setAllAttendances] = useState([]);
  const [attendanceLoading, setAttendanceLoading] = useState(true);
  const [attendanceError, setAttendanceError] = useState(null);

  const { fetchMore } = useQuery(GET_ALL_ATTENDANCES, {
    variables: {
      projectId: activeProject,
      limit: 35000,
      offset: 0,
    },
    skip: !activeProject,
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    const fetchAllAttendancesParallel = async () => {
      if (!activeProject) return;

      try {
        setAttendanceLoading(true);
        setAttendanceError(null);

        const limit = 35000;
        let offset = 0;
        let allChunks = [];

        // First request
        const { data: initialData } = await fetchMore({
          variables: { projectId: activeProject, limit, offset },
        });

        const initialChunk = initialData?.getAttendances?.attendance || [];
        allChunks = [...initialChunk];

        if (initialChunk.length < limit) {
          setAllAttendances(allChunks);
          return setAttendanceLoading(false);
        }

        offset += limit;

        // Now fetch sequentially in batches (e.g. 3 at a time)
        const maxParallel = 10;
        let keepGoing = true;

        while (keepGoing) {
          const promises = [];

          for (let i = 0; i < maxParallel; i++) {
            const currentOffset = offset + i * limit;

            const p = fetchMore({
              variables: {
                projectId: activeProject,
                limit,
                offset: currentOffset,
              },
            }).then((res) => {
              const chunk = res?.data?.getAttendances?.attendance || [];
              return { chunk, currentOffset };
            });

            promises.push(p);
          }

          const results = await Promise.all(promises);

          for (let res of results) {
            if (res.chunk.length > 0) {
              allChunks = [...allChunks, ...res.chunk];
            }

            if (res.chunk.length < limit) {
              keepGoing = false;
            }
          }

          offset += maxParallel * limit;
        }

        setAllAttendances(allChunks);
      } catch (err) {
        console.error("Parallel attendance fetch error:", err);
        setAttendanceError(err);
      } finally {
        setAttendanceLoading(false);
      }
    };

    fetchAllAttendancesParallel();
  }, [activeProject, fetchMore]);

  // const {
  //   data: attendanceData,
  //   loading: attendanceLoading,
  //   error: attendanceError,
  // } = useQuery(GET_ALL_ATTENDANCES, {
  //   variables: { projectId: activeProject },
  //   skip: !activeProject,
  // });

  const [SyncParticipants] = useMutation(SYNC_PARTICIPANTS_WITH_COMMCARE);

  const userDetails = JSON.parse(window.localStorage.getItem("myPimaUserData"));

  useEffect(() => {
    if (
      participantData &&
      participantData.getParticipantsByProject.status === 200
    ) {
      const sendToCcCount =
        participantData.getParticipantsByProject.participants.filter(
          (participant) => participant.create_in_commcare === "false"
        );
      setSendToCcCount(sendToCcCount.length);
    }
  }, [participantData]);

  const handleTakeAction = async () => {
    setIsSyncing(true);

    try {
      await SyncParticipants({
        variables: {
          projectId: activeProject,
        },
      });
      await refetchParticipants(); // Refetch the participants data after syncing
      setIsSyncing(false);
    } catch (err) {
      console.log(err);
      setIsSyncing(false);
    }
  };

  if (participantsLoading || attendanceLoading) {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <BeatLoader color="#0D3C61" size={15} />
        <em style={{ color: "#0D3C61" }}>
          Loading Participants and Attendances...
        </em>
      </Grid>
    );
  }

  if (participantsError || attendanceError) {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <em style={{ color: "red" }}>
          Error loading data:{" "}
          {participantsError?.message || attendanceError?.message}
        </em>
      </Grid>
    );
  }

  const participants = participantData.getParticipantsByProject.participants;
  // const allAttendances = attendanceData.getAttendances.attendance;

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
      selector: (row) => (row.gender === "m" ? "Male" : "Female"),
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

  const rows = participants.map((participant, index) => {
    const row = {
      num: index + 1,
      Project: projects.find(
        (project) => project.sf_project_id === activeProject
      ).project_name,
      p_id: participant.p_id,
      first_name: participant.first_name,
      middle_name: participant.middle_name ? participant.middle_name : "",
      last_name: participant.last_name ? participant.last_name : "",
      gender: participant.gender,
      age: participant.age,
      coffee_tree_numbers: participant.coffee_tree_numbers,
      phone_number: participant.phone_number,
      farmer_sf_id: participant.p_id,
      hh_number: participant.hh_number,
      sf_household_id: participant.household_id,
      ffg_id: participant.ffg_id,
      location: participant.location,
      tns_id: participant.tns_id,
      training_group:
        trainingGroups && trainingGroups.length > 0
          ? trainingGroups.find((tg) => tg.tg_id === participant.training_group)
              ?.tg_name || "N/A"
          : "N/A",
      farmer_number: participant.primary_household_member,
      status: participant.status,
      farmer_trainer: participant.farmer_trainer,
      // business_advisor: participant.business_advisor,
      create_in_commcare: participant.create_in_commcare,
      number_of_coffee_plots: participant.number_of_coffee_plots,
    };

    if (activeProject === "a0EOj000003E0knMAC") {
      row.agronomy_advisor = participant.business_advisor;
    } else {
      row.business_advisor = participant.business_advisor;
    }

    if (
      activeProject === "a0EOj000002FMGnMAO" ||
      activeProject === "a0EOj000002C7ivMAC"
    ) {
      row.national_identification_id = participant.coop_membership_number
        ? participant.coop_membership_number
        : "";
    } else if (activeProject === "a0EOj000003E0knMAC") {
      row.growers_number = participant.coop_membership_number
        ? participant.coop_membership_number
        : "";
    } else {
      row.coop_membership_number = participant.coop_membership_number
        ? participant.coop_membership_number
        : "";
    }

    return row;
  });

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
          selectedProject={activeProject}
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
          projects.find((project) => project.sf_project_id === activeProject)
            .project_name
        }
        sfProjectId={activeProject}
      />
    </div>
  );
};

export default Participants;
