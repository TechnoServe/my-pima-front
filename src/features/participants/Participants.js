import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  LinearProgress,
  Tooltip,
  Chip,
  Stack,
  Divider,
  Collapse,
  Link,
  IconButton,
  Grid,
} from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import {
  AiOutlineFileText,
  AiOutlineWarning,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";
import Table from "../../components/Table/Table";
import UploadParticipantsModal from "../../components/Modals/UploadParticipantsModal";
import {
  GET_PARTICIPANTS_PER_PROJECT,
  SYNC_PARTICIPANTS_WITH_COMMCARE,
} from "../../graphql/queries/participantsRequests";
import { GET_ALL_ATTENDANCES } from "../../graphql/queries/attendancesRequests";
import { useMutation, useQuery } from "@apollo/client";
import { useOutletContext } from "react-router-dom";
import useOutboxProgress from "./hooks/useOutboxProgress";
import "./partdetail/partsstyles.css";

const BRAND = { navy: "#1b2a4e", teal: "#087c8f" };

const Participants = () => {
  const { activeProject, trainingGroups, projects } = useOutletContext();
  const [open, setOpen] = useState(false);
  const [sendToCcCount, setSendToCcCount] = useState(0);
  const [isSyncingCommCare, setIsSyncingCommCare] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  // Live outbox progress (Salesforce push)
  const { isSyncing, overallPercent, phaseList, totals, run, failedRows } =
    useOutboxProgress(activeProject);

  const {
    data: participantData,
    loading: participantsLoading,
    error: participantsError,
    refetch: refetchParticipants,
  } = useQuery(GET_PARTICIPANTS_PER_PROJECT, {
    variables: { projectId: activeProject },
    skip: !activeProject,
    fetchPolicy: "cache-and-network",
  });

  const {
    data: attendanceData,
    loading: attendanceLoading,
    error: attendanceError,
  } = useQuery(GET_ALL_ATTENDANCES, {
    variables: { projectId: activeProject },
    skip: !activeProject,
    fetchPolicy: "cache-and-network",
  });

  const [SyncParticipants] = useMutation(SYNC_PARTICIPANTS_WITH_COMMCARE);

  const userDetails = useMemo(() => {
    try {
      return JSON.parse(window.localStorage.getItem("myPimaUserData"));
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    if (participantData?.getParticipantsByProject?.status === 200) {
      const pending =
        participantData.getParticipantsByProject.participants.filter(
          (p) => String(p.create_in_commcare).toLowerCase() === "false"
        );
      setSendToCcCount(pending.length);
    }
  }, [participantData]);

  const handleSendToCommCare = async () => {
    if (!activeProject) return;
    setIsSyncingCommCare(true);
    try {
      await SyncParticipants({ variables: { projectId: activeProject } });
      await refetchParticipants();
    } finally {
      setIsSyncingCommCare(false);
    }
  };

  const participants =
    participantData?.getParticipantsByProject?.participants ?? [];
  const allAttendances = attendanceData?.getAttendances?.attendance ?? [];

  const canUpload =
    (userDetails?.role === "super_admin" ||
      userDetails?.role === "ci_leadership" ||
      userDetails?.role === "senior_business_advisor" ||
      userDetails?.role === "project_manager" ||
      userDetails?.role === "mel_analyst") &&
    !isSyncing; // hide upload while syncing to Salesforce

  // Build rows for your Table comp
  const rows = useMemo(
    () =>
      participants.map((participant, index) => {
        const row = {
          num: index + 1,
          Project: projects.find((p) => p.sf_project_id === activeProject)
            ?.project_name,
          p_id: participant.p_id,
          first_name: participant.first_name,
          middle_name: participant.middle_name || "",
          last_name: participant.last_name || "",
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
            trainingGroups?.find(
              (tg) => tg.tg_id === participant.training_group
            )?.tg_name || "N/A",
          farmer_number: participant.primary_household_member,
          status: participant.status,
          farmer_trainer: participant.farmer_trainer,
          create_in_commcare: participant.create_in_commcare,
          number_of_coffee_plots: participant.number_of_coffee_plots,
          business_advisor: participant.business_advisor,
        };
        if (activeProject === "a0EOj000003E0knMAC") {
          row.agronomy_advisor = participant.business_advisor;
        }

        if (activeProject === "a0EOj000003E0knMAC") {
          row.growers_number = participant.coop_membership_number;
        }

        if (
          activeProject === "a0EOj000002FMGnMAO" ||
          activeProject === "a0EOj000002C7ivMAC"
        ) {
          row.national_identification_id = participant.coop_membership_number;
        }

        return row;
      }),
    [participants, projects, activeProject, trainingGroups]
  );

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
        <Chip
          label={row.farmer_number === "1" ? "1" : "2"}
          color={row.farmer_number === "1" ? "success" : "error"}
          variant="outlined"
          size="small"
        />
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

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Hero */}
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${BRAND.navy} 0%, ${BRAND.teal} 100%)`,
          color: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
              Registered Farmers
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.95 }}>
              Project:&nbsp;
              {projects.find((p) => p.sf_project_id === activeProject)
                ?.project_name || "—"}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} alignItems="center">
            {!isSyncing && (
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#fff",
                  color: BRAND.navy,
                  "&:hover": { bgcolor: "#f3f4f6" },
                }}
                onClick={handleSendToCommCare}
                disabled={isSyncingCommCare || sendToCcCount === 0}
              >
                {isSyncingCommCare
                  ? "Sending..."
                  : `Send to CommCare (${sendToCcCount})`}
              </Button>
            )}

            {canUpload && (
              <Tooltip title="Upload New Participants">
                <Button
                  onClick={() => setOpen(true)}
                  startIcon={<FaCloudUploadAlt />}
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    borderWidth: 1,
                    borderStyle: "solid",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                  }}
                >
                  Upload
                </Button>
              </Tooltip>
            )}
          </Stack>
        </Box>
      </Paper>

      {/* Progress Panel */}
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          borderRadius: 2,
          borderLeft: `4px solid ${isSyncing ? BRAND.teal : BRAND.navy}`,
          bgcolor: isSyncing ? "#f0f9fb" : "#f5f7fb",
        }}
      >
        <Stack spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 800, color: BRAND.navy }}
              >
                {isSyncing ? "Salesforce Sync in Progress" : "No Active Sync"}
              </Typography>
              {run?.fileName && (
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mt: 0.5 }}
                >
                  <AiOutlineFileText />
                  {run.fileUrl ? (
                    <Link
                      href={run.fileUrl}
                      target="_blank"
                      rel="noopener"
                      underline="hover"
                      color={BRAND.teal}
                    >
                      {run.fileName}
                    </Link>
                  ) : (
                    <Typography variant="caption" color="text.secondary">
                      {run.fileName}
                    </Typography>
                  )}
                </Stack>
              )}
            </Box>

            <Stack direction="row" spacing={1.5}>
              <Chip
                size="small"
                label={`Total: ${totals.total}`}
                sx={{ bgcolor: "#fff" }}
                variant="outlined"
              />
              <Chip
                size="small"
                label={`Sent: ${totals.sent}`}
                sx={{ bgcolor: "#fff" }}
                variant="outlined"
              />
              <Chip
                size="small"
                color={totals.failed > 0 ? "error" : "default"}
                label={`Failed: ${totals.failed}`}
                variant="outlined"
              />
              <Chip
                size="small"
                label={`Left: ${totals.leftToSend}`}
                sx={{ bgcolor: "#fff" }}
                variant="outlined"
              />
            </Stack>
          </Stack>

          {/* Overall Progress */}
          <Box sx={{ mt: 0.5 }}>
            {isSyncing ? (
              <>
                <LinearProgress
                  variant={
                    overallPercent != null ? "determinate" : "indeterminate"
                  }
                  value={overallPercent ?? undefined}
                  sx={{ height: 10, borderRadius: 6 }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 0.5,
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    {overallPercent != null
                      ? `${overallPercent}% complete`
                      : "Working…"}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Started:{" "}
                    {run?.startedAt
                      ? new Date(run.startedAt).toLocaleString()
                      : "—"}
                  </Typography>
                </Box>
              </>
            ) : (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  {sendToCcCount > 0
                    ? `You have ${sendToCcCount} participant${
                        sendToCcCount === 1 ? "" : "s"
                      } pending for CommCare.`
                    : "All participants are already sent to CommCare."}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    onClick={handleSendToCommCare}
                    disabled={isSyncingCommCare || sendToCcCount === 0}
                    sx={{
                      bgcolor: BRAND.teal,
                      "&:hover": { bgcolor: "#066d79" },
                    }}
                  >
                    {isSyncingCommCare ? "Sending..." : "Send to CommCare"}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => refetchParticipants()}
                    sx={{ color: BRAND.navy, borderColor: BRAND.navy }}
                  >
                    Refresh
                  </Button>
                </Stack>
              </Stack>
            )}
          </Box>

          {isSyncing && (
            <>
              {/* Phase Cards */}
              <Grid container spacing={1.5} sx={{ mt: 0.5 }}>
                {phaseList.map((p) => {
                  const pct = p.total
                    ? Math.round((p.sent / p.total) * 100)
                    : 0;
                  return (
                    <Grid item xs={12} md={4} key={p.key}>
                      <Paper
                        variant="outlined"
                        sx={{ p: 1.5, borderRadius: 2, bgcolor: "#fff" }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 700, color: BRAND.navy }}
                        >
                          {p.name}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={pct}
                          sx={{ height: 6, borderRadius: 6, mt: 1 }}
                        />
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{ mt: 1 }}
                          alignItems="center"
                        >
                          <Typography variant="caption" color="text.secondary">
                            {p.sent}/{p.total} sent
                          </Typography>
                          <Chip
                            size="small"
                            variant="outlined"
                            label={`Pending: ${p.pending + p.processing}`}
                          />
                          <Chip
                            size="small"
                            variant="outlined"
                            icon={p.failed > 0 ? <AiOutlineWarning /> : null}
                            color={p.failed > 0 ? "error" : "default"}
                            label={`Failed: ${p.failed}`}
                          />
                        </Stack>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>

              {/* Failed Rows (current upload) */}
              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mt: 1 }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, color: BRAND.navy }}
                  >
                    Failed Records (current upload)
                  </Typography>
                  <Chip
                    size="small"
                    color={failedRows.length ? "error" : "default"}
                    label={failedRows.length}
                  />
                  <IconButton
                    size="small"
                    onClick={() => setShowFailed((s) => !s)}
                    sx={{ ml: -0.5 }}
                  >
                    {showFailed ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                  </IconButton>
                </Stack>

                <Collapse in={showFailed} unmountOnExit>
                  {failedRows.length === 0 ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      No failed items for this upload.
                    </Typography>
                  ) : (
                    <Box
                      sx={{
                        mt: 1,
                        border: "1px solid #e5e7eb",
                        borderRadius: 2,
                        overflow: "hidden",
                        bgcolor: "#fff",
                      }}
                    >
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "120px 1fr 1fr",
                          gap: 1,
                          py: 1,
                          px: 1.5,
                          bgcolor: "#f9fafb",
                          borderBottom: "1px solid #e5e7eb",
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ fontWeight: 700, color: BRAND.navy }}
                        >
                          Type
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ fontWeight: 700, color: BRAND.navy }}
                        >
                          Identifiers
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ fontWeight: 700, color: BRAND.navy }}
                        >
                          Error
                        </Typography>
                      </Box>

                      {failedRows.slice(0, 20).map((r) => (
                        <Box
                          key={r.id}
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "120px 1fr 1fr",
                            gap: 1,
                            py: 1,
                            px: 1.5,
                            borderBottom: "1px solid #f1f5f9",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ textTransform: "capitalize" }}
                          >
                            {r.type}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ pr: 2 }}
                          >
                            {r.type === "household" && (
                              <>
                                <b>FFG:</b> {r.ffgId || "—"} &nbsp; <b>HH:</b>{" "}
                                {r.householdComposite || "—"} &nbsp; <b>SF:</b>{" "}
                                {r.sfId || "—"}
                              </>
                            )}
                            {r.type === "participant" && (
                              <>
                                <b>TNS:</b> {r.tnsId || "—"} &nbsp; <b>FFG:</b>{" "}
                                {r.ffgId || "—"} &nbsp; <b>HH:</b>{" "}
                                {r.householdComposite || "—"}
                              </>
                            )}
                            {r.type === "attendance" && (
                              <>
                                <b>FFG:</b> {r.ffgId || "—"} &nbsp;{" "}
                                <b>Module:</b> {r.moduleId || "—"} &nbsp;{" "}
                                <b>Part SF:</b>{" "}
                                {r.participantSalesforceId || "—"} &nbsp;{" "}
                                <b>Part TNS:</b> {r.participantTnsId || "—"}
                              </>
                            )}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#b91c1c",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            title={r.lastError || ""}
                          >
                            {r.lastError || "—"}
                          </Typography>
                        </Box>
                      ))}

                      {failedRows.length > 20 && (
                        <Box
                          sx={{
                            py: 1,
                            textAlign: "center",
                            bgcolor: "#f9fafb",
                          }}
                        >
                          <Typography variant="caption" color="text.secondary">
                            Showing first 20 of {failedRows.length} failed rows
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  )}
                </Collapse>
              </Box>
            </>
          )}
        </Stack>
      </Paper>

      {/* Table card */}
      <Paper
        elevation={0}
        sx={{ p: 2.5, borderRadius: 2, bgcolor: "rgba(8,124,143,0.06)" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 1 }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 800, color: BRAND.navy }}
          >
            Participants Table
          </Typography>
          {(participantsLoading || attendanceLoading) && (
            <Box sx={{ width: 280 }}>
              <LinearProgress />
            </Box>
          )}
        </Stack>
        <Divider sx={{ mb: 2 }} />

        {participantsError || attendanceError ? (
          <Box className="no__data">
            <Typography color="error">
              {participantsError?.message || attendanceError?.message}
            </Typography>
          </Box>
        ) : participants.length > 0 ? (
          <Table
            columns={columns}
            data={rows}
            tableRowItem={"participants"}
            allAttendances={allAttendances}
            selectedProject={activeProject}
          />
        ) : (
          <div className="no__data">
            <h1 style={{ fontSize: 18, color: BRAND.navy }}>
              No Registered Farmers Yet
            </h1>
          </div>
        )}
      </Paper>

      {/* Upload modal */}
      <UploadParticipantsModal
        open={open}
        setOpen={setOpen}
        navigatedProject={
          projects.find((p) => p.sf_project_id === activeProject)?.project_name
        }
        sfProjectId={activeProject}
      />
    </Box>
  );
};

export default Participants;
