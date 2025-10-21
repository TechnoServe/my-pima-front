import React, { useMemo, useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  IconButton,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  LinearProgress,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
} from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import {
  AiOutlineReload,
  AiOutlineExport,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";
import { CheckCircle, XCircle } from "lucide-react";
import { useOutletContext } from "react-router-dom";

// --- Brand tokens ---
const BRAND = { navy: "#1b2a4e", teal: "#087c8f" };

// --- GraphQL (no onlyMismatches anymore) ---
export const GET_ATTENDANCE_CHECK_COMPARISON = gql`
  query CompareAttendanceVsCheck($projectId: ID!, $search: String, $tgIds: [ID!]) {
    getAttendanceCheckComparison(projectId: $projectId, search: $search, tgIds: $tgIds) {
      status
      totals {
        total
        matches
        mismatches
      }
      items {
        participantId
        tnsId
        firstName
        lastName
        trainingGroupName
        check {
          recordId
          numberOfTrainingsAttended
          attendedAnyTrainings
          attendedLastMonthsTraining
          farmVisit
          observation
        }
        attendance {
          countAttended
          anyAttended
          attendedPreviousModule
          evidence {
            attendanceId
            trainingDate
            moduleName
            currentPreviousModule
            attended
          }
        }
        matches {
          countEqual
          anyEqual
          previousModuleEqual
        }
      }
    }
  }
`;

// --- Helpers ---
const boolLabel = (v) => (v === true ? "Yes" : v === false ? "No" : "—");

function MatchChip({ ok, label }) {
  if (ok == null) return <Chip size="small" label="—" variant="outlined" />;
  return (
    <Chip
      size="small"
      icon={ok ? <CheckCircle size={16} /> : <XCircle size={16} />}
      label={label ?? (ok ? "Match" : "Mismatch")}
      sx={{
        bgcolor: ok ? "#e8f5e9" : "#ffebee",
        color: ok ? "#1b5e20" : "#b71c1c",
        ".MuiChip-icon": { color: ok ? "#1b5e20" : "#b71c1c" },
      }}
      variant="filled"
    />
  );
}

function ValuePill({ children, muted }) {
  return (
    <Box
      sx={{
        px: 1,
        py: 0.5,
        borderRadius: 1,
        bgcolor: muted ? "#f3f4f6" : "#ffffff",
        border: "1px solid #e5e7eb",
        fontSize: 12,
        lineHeight: 1.2,
        whiteSpace: "nowrap",
        maxWidth: 240,
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
      title={typeof children === "string" ? children : undefined}
    >
      {children}
    </Box>
  );
}

// Rule-aware match
function rowIsMatchByMode(r, mode) {
  if (mode === "farm_visit") {
    // compare Any + Prev
    return r.m_any === true && r.m_prev === true;
  }
  // observation mode → compare Prev only
  return r.m_prev === true;
}

// --- Main Component ---
export default function AttendanceCrosscheck() {
  const { activeProject, trainingGroups, projects } = useOutletContext();

  // Filters
  const [search, setSearch] = useState("");
  const [selectedTg, setSelectedTg] = useState("all");
  const [verifyMode, setVerifyMode] = useState("farm_visit"); // 'farm_visit' | 'observation'
  const [openRows, setOpenRows] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const tgIds = useMemo(
    () => (selectedTg === "all" ? undefined : [selectedTg]),
    [selectedTg]
  );

  const { data, loading, error, refetch } = useQuery(
    GET_ATTENDANCE_CHECK_COMPARISON,
    {
      variables: {
        projectId: activeProject,
        search: search || undefined,
        tgIds,
      },
      skip: !activeProject,
      fetchPolicy: "cache-and-network",
    }
  );

  const items = data?.getAttendanceCheckComparison?.items ?? [];
  const projectName = useMemo(
    () =>
      projects?.find((p) => p.sf_project_id === activeProject)?.project_name ??
      "—",
    [projects, activeProject]
  );

  // Normalize rows
  const rows = useMemo(
    () =>
      items.map((it, idx) => ({
        id: it.participantId || idx,
        name: [it.firstName, it.lastName].filter(Boolean).join(" ") || "—",
        tnsId: it.tnsId || "—",
        tg: it.trainingGroupName || "—",
        // Check values
        check_count: it.check?.numberOfTrainingsAttended ?? null,
        check_any: it.check?.attendedAnyTrainings ?? null,
        check_prev: it.check?.attendedLastMonthsTraining ?? null,
        has_fv: it.check?.farmVisit === true,
        has_obs: it.check?.observation === true,
        // Attendance computed
        att_count: it.attendance?.countAttended ?? null,
        att_any: it.attendance?.anyAttended ?? null,
        att_prev: it.attendance?.attendedPreviousModule ?? null,
        // Matches (may be null if not applicable)
        m_count: it.matches?.countEqual ?? null,
        m_any: it.matches?.anyEqual ?? null,
        m_prev: it.matches?.previousModuleEqual ?? null,
        evidence: it.attendance?.evidence ?? [],
        checkId: it.check?.recordId,
      })),
    [items]
  );

  // Filter by mode (FV vs Observation)
  const filteredRows = useMemo(() => {
    if (verifyMode === "farm_visit") return rows.filter((x) => x.has_fv);
    return rows.filter((x) => x.has_obs);
  }, [rows, verifyMode]);

  // Decorate with match flag based on mode
  const displayRows = useMemo(
    () => filteredRows.map((r) => ({ ...r, _isMatch: rowIsMatchByMode(r, verifyMode) })),
    [filteredRows, verifyMode]
  );

  // Summary for visible rows (based on mode)
  const visibleSummary = useMemo(() => {
    const total = displayRows.length;
    const matches = displayRows.filter((r) => r._isMatch).length;
    const mismatches = total - matches;
    return { total, matches, mismatches };
  }, [displayRows]);

  // paginate
  const pagedRows = useMemo(() => {
    const start = page * rowsPerPage;
    return displayRows.slice(start, start + rowsPerPage);
  }, [displayRows, page, rowsPerPage]);

  // reset page when filters/data change
  useEffect(() => {
    setPage(0);
  }, [items, search, selectedTg, verifyMode]);

  const toggleRow = (id) =>
    setOpenRows((s) => ({
      ...s,
      [id]: !s[id],
    }));

  // CSV Export (two buttons: mismatches-only vs all, using current mode rules)
  const exportCsv = (onlyErrors = true) => {
    const src = onlyErrors ? displayRows.filter((r) => !r._isMatch) : displayRows;
    const header =
      verifyMode === "farm_visit"
        ? [
            "Participant",
            "TNS ID",
            "TG",
            "Farm Visit",
            "Check Any",
            "Att Any",
            "Check Prev",
            "Att Prev",
            "Match Any",
            "Match Prev",
          ]
        : [
            "Participant",
            "TNS ID",
            "TG",
            "Observation",
            "Check Prev",
            "Att Prev",
            "Match Prev",
          ];
    const cell = (v) => {
      if (v === null || v === undefined) return "";
      const s = String(v);
      if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
      return s;
    };
    const lines = [
      header.map(cell).join(","),
      ...src.map((r) => {
        if (verifyMode === "farm_visit") {
          return [
            r.name,
            r.tnsId,
            r.tg,
            boolLabel(r.has_fv),
            boolLabel(r.check_any),
            boolLabel(r.att_any),
            boolLabel(r.check_prev),
            boolLabel(r.att_prev),
            r.m_any == null ? "N/A" : r.m_any ? "Match" : "Mismatch",
            r.m_prev == null ? "N/A" : r.m_prev ? "Match" : "Mismatch",
          ]
            .map(cell)
            .join(",");
        }
        return [
          r.name,
          r.tnsId,
          r.tg,
          boolLabel(r.has_obs),
          boolLabel(r.check_prev),
          boolLabel(r.att_prev),
          r.m_prev == null ? "N/A" : r.m_prev ? "Match" : "Mismatch",
        ]
          .map(cell)
          .join(",");
      }),
    ];
    const csv = lines.join("\r\n");
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attendance_crosscheck_${verifyMode}_${
      onlyErrors ? "mismatches" : "all"
    }.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

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
              Attendance Verification
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {
                projects?.find((p) => p.sf_project_id === activeProject)
                  ?.project_name ?? "—"
              }
            </Typography>
          </Box>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Button
              onClick={() => exportCsv(true)}
              startIcon={<AiOutlineExport />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                borderWidth: 1,
                borderStyle: "solid",
                "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
              }}
            >
              Export mismatches
            </Button>
            <Button
              onClick={() => exportCsv(false)}
              startIcon={<AiOutlineExport />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                borderWidth: 1,
                borderStyle: "solid",
                "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
              }}
            >
              Export all
            </Button>
            <IconButton onClick={() => refetch()} sx={{ color: "#fff" }}>
              <AiOutlineReload />
            </IconButton>
          </Stack>
        </Box>
      </Paper>

      {/* Summary + Filters */}
      <Paper elevation={0} sx={{ p: 2.5, borderRadius: 2, bgcolor: "#f5f7fb" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", md: "center" }}
        >
          {/* Summary (for currently visible rows + rule) */}
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                p: 1.5,
                bgcolor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                minWidth: 140,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Total (visible)
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                {visibleSummary.total}
              </Typography>
            </Box>
            <Box
              sx={{
                p: 1.5,
                bgcolor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                minWidth: 140,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Matched (rule)
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, color: "#1b5e20" }}
              >
                {visibleSummary.matches}
              </Typography>
            </Box>
            <Box
              sx={{
                p: 1.5,
                bgcolor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                minWidth: 160,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Mismatches (rule)
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, color: "#b71c1c" }}
              >
                {visibleSummary.mismatches}
              </Typography>
            </Box>
          </Stack>

          {/* Filters */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ minWidth: 280 }}
          >
            <TextField
              size="small"
              placeholder="Search name or TNS…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel>Training Group</InputLabel>
              <Select
                label="Training Group"
                value={selectedTg}
                onChange={(e) => setSelectedTg(e.target.value)}
              >
                <MenuItem value="all">All Groups</MenuItem>
                {(trainingGroups || []).map((tg) => (
                  <MenuItem key={tg.tg_id} value={tg.tg_id}>
                    {tg.tg_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* NEW: Verification Source dropdown */}
            <FormControl size="small" sx={{ minWidth: 220 }}>
              <InputLabel>Verification Source</InputLabel>
              <Select
                label="Verification Source"
                value={verifyMode}
                onChange={(e) => setVerifyMode(e.target.value)}
              >
                <MenuItem value="farm_visit">Farm Visit</MenuItem>
                <MenuItem value="observation">Observation</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Paper>

      {/* Table */}
      <Paper elevation={0} sx={{ p: 1.5, borderRadius: 2, bgcolor: "#fff" }}>
        {loading && (
          <Box sx={{ p: 2 }}>
            <LinearProgress />
          </Box>
        )}
        {error && (
          <Box sx={{ p: 2 }}>
            <Typography color="error">{error.message}</Typography>
          </Box>
        )}
        {!loading && !error && (
          <>
            <TableContainer>
              <Table size="small" sx={{ minWidth: 1040 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Participant</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Check Results</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>
                      Attendance Results
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Compare</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pagedRows.map((r) => (
                    <React.Fragment key={r.id}>
                      <TableRow
                        hover
                        className={r._isMatch ? "match-row" : "mismatch-row"}
                      >
                        <TableCell width={260}>
                          <Stack spacing={0.25}>
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 600 }}
                            >
                              {r.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              TNS: {r.tnsId} • TG: {r.tg}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell width={420}>
                          <Stack direction="row" spacing={1} flexWrap="wrap">
                            <ValuePill>Count: {r.check_count ?? "—"}</ValuePill>
                            <ValuePill>Any: {boolLabel(r.check_any)}</ValuePill>
                            <ValuePill>Prev: {boolLabel(r.check_prev)}</ValuePill>
                            <ValuePill muted>
                              Farm Visit: {boolLabel(r.has_fv)}
                            </ValuePill>
                            <ValuePill muted>
                              Observation: {boolLabel(r.has_obs)}
                            </ValuePill>
                          </Stack>
                        </TableCell>

                        <TableCell width={380}>
                          <Stack direction="row" spacing={1}>
                            <ValuePill muted>
                              Count: {r.att_count ?? "—"}
                            </ValuePill>
                            <ValuePill muted>
                              Any: {boolLabel(r.att_any)}
                            </ValuePill>
                            <ValuePill muted>
                              Prev: {boolLabel(r.att_prev)}
                            </ValuePill>
                          </Stack>
                        </TableCell>

                        {/* Compare — show only the chips relevant to current mode */}
                        <TableCell width={260}>
                          <Stack direction="row" spacing={1}>
                            {verifyMode === "farm_visit" && (
                              <>
                                <MatchChip ok={r.m_any} label="Any" />
                                <MatchChip ok={r.m_prev} label="Prev" />
                              </>
                            )}
                            {verifyMode === "observation" && (
                              <MatchChip ok={r.m_prev} label="Prev" />
                            )}
                          </Stack>
                        </TableCell>

                        <TableCell align="right" width={48}>
                          <IconButton size="small" onClick={() => toggleRow(r.id)}>
                            {openRows[r.id] ? (
                              <AiOutlineCaretUp />
                            ) : (
                              <AiOutlineCaretDown />
                            )}
                          </IconButton>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell colSpan={5} sx={{ p: 0, borderBottom: 0 }}>
                          <Collapse in={!!openRows[r.id]} timeout="auto" unmountOnExit>
                            <Box sx={{ p: 2, bgcolor: "#fafafa" }}>
                              <Typography
                                variant="subtitle2"
                                sx={{ color: BRAND.navy, mb: 1 }}
                              >
                                Evidence
                              </Typography>
                              {(r.evidence || []).length === 0 ? (
                                <Typography variant="body2" color="text.secondary">
                                  No attendance rows found.
                                </Typography>
                              ) : (
                                <Box
                                  sx={{
                                    display: "grid",
                                    gridTemplateColumns:
                                      "180px 1fr 140px 100px",
                                    gap: 1,
                                    p: 1,
                                    border: "1px solid #e5e7eb",
                                    borderRadius: 1,
                                    bgcolor: "#fff",
                                  }}
                                >
                                  <Typography
                                    variant="caption"
                                    sx={{ fontWeight: 700 }}
                                  >
                                    Date
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    sx={{ fontWeight: 700 }}
                                  >
                                    Module
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    sx={{ fontWeight: 700 }}
                                  >
                                    Current/Prev
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    sx={{ fontWeight: 700 }}
                                  >
                                    Attended
                                  </Typography>
                                  {(r.evidence || []).map((ev) => (
                                    <React.Fragment
                                      key={ev.attendanceId || `${r.id}-${ev.trainingDate}`}
                                    >
                                      <Typography variant="body2">
                                        {ev.trainingDate
                                          ? new Date(ev.trainingDate).toLocaleDateString()
                                          : "—"}
                                      </Typography>
                                      <Typography
                                        variant="body2"
                                        color="text.secondary"
                                      >
                                        {ev.moduleName || "—"}
                                      </Typography>
                                      <Typography variant="body2">
                                        {ev.currentPreviousModule || "—"}
                                      </Typography>
                                      <Typography variant="body2">
                                        {boolLabel(ev.attended)}
                                      </Typography>
                                    </React.Fragment>
                                  ))}
                                </Box>
                              )}
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <TablePagination
                component="div"
                count={displayRows.length}
                page={page}
                onPageChange={(_, p) => setPage(p)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(e) => {
                  setRowsPerPage(parseInt(e.target.value, 10));
                  setPage(0);
                }}
                rowsPerPageOptions={[25, 50, 100]}
              />
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
}
