// src/pages/HouseholdVisits/HouseholdVisits.jsx
import React, { useMemo, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  InputAdornment,
  LinearProgress,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Collapse,
  Paper,
  ButtonBase,
  alpha,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import LoadingScreen from "../../../components/LoadingScreen";
import { GET_HOUSEHOLDS_FOR_PROJECT } from "../../../graphql/queries/householdsForProject";
import { Virtuoso } from "react-virtuoso";
import * as XLSX from "xlsx";

const fmtDate = (d) => (d ? new Date(d).toLocaleDateString() : "—");
const plots = (p) =>
  (typeof p?.numberOfCoffeePlots === "number" ? p.numberOfCoffeePlots : 0) ||
  (typeof p?.coffeeTreeNumbers === "number" ? p.coffeeTreeNumbers : 0) ||
  0;

// Compact “pill” filter with count
const Pill = ({ active, onClick, icon, label, count }) => (
  <ButtonBase
    onClick={onClick}
    sx={{
      px: 1.25, py: 0.5, borderRadius: 999,
      bgcolor: active ? (t) => alpha(t.palette.primary.main, 0.12) : "transparent",
      border: (t) => `1px solid ${active ? alpha(t.palette.primary.main, 0.35) : "#e6e6e6"}`,
      "&:hover": { bgcolor: (t) => alpha(t.palette.primary.main, active ? 0.16 : 0.08) },
      display: "inline-flex", alignItems: "center", gap: 1, lineHeight: 1,
    }}
  >
    {icon}
    <Typography variant="body2" sx={{ fontWeight: 600 }}>{label}</Typography>
    {typeof count === "number" && (
      <Chip size="small" label={count.toLocaleString()} sx={{ ml: 0.5, height: 20 }} />
    )}
  </ButtonBase>
);

const StatCard = ({ label, value, icon }) => (
  <Card elevation={0} sx={{ borderRadius: 2, border: "1px solid #eee", flex: 1, minWidth: 160 }}>
    <CardContent sx={{ display: "flex", alignItems: "center", gap: 1, py: 1.5 }}>
      {icon}
      <Box>
        <Typography variant="caption" color="text.secondary">{label}</Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.25 }}>
          {value?.toLocaleString?.() ?? value ?? 0}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default function HouseholdVisits() {
  const { activeProject } = useOutletContext();

  // Filters
  const [visit, setVisit] = useState("all");     // all | visited | never
  const [coffee, setCoffee] = useState("all");   // all | with | without
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(q.trim().toLowerCase()), 200);
    return () => clearTimeout(t);
  }, [q]);

  const { data, loading, error } = useQuery(GET_HOUSEHOLDS_FOR_PROJECT, {
    variables: { projectId: activeProject },
    fetchPolicy: "cache-and-network",
  });
  if (error) toast.error(error.message);

  const households = data?.householdsForProject || [];

  const totals = useMemo(() => {
    const visited = households.filter((h) => h.visitCount > 0).length;
    const never = households.length - visited;
    const sumVisits = households.reduce((s, h) => s + (h.visitCount || 0), 0);
    const withCoffee = households.filter((h) => (h.coffeePlots || 0) > 0).length;
    const withoutCoffee = households.length - withCoffee;
    return { households: households.length, visited, never, sumVisits, withCoffee, withoutCoffee };
  }, [households]);

  const filtered = useMemo(() => {
    return households
      .filter((h) => (visit === "visited" ? h.visitCount > 0 : visit === "never" ? h.visitCount === 0 : true))
      .filter((h) => (coffee === "with" ? (h.coffeePlots || 0) > 0 : coffee === "without" ? (h.coffeePlots || 0) === 0 : true))
      .filter((h) => {
        if (!debouncedQ) return true;
        const inHH =
          (h.householdId || "").toLowerCase().includes(debouncedQ) ||
          (h.householdName || "").toLowerCase().includes(debouncedQ);
        if (inHH) return true;
        return (h.participants || []).some((p) =>
          [p.firstName, p.middleName, p.lastName, p.tnsId].filter(Boolean).join(" ").toLowerCase().includes(debouncedQ)
        );
      });
  }, [households, visit, coffee, debouncedQ]);

  const exportExcel = () => {
    const hhRows = filtered.map((h) => ({
      Household_ID: h.householdId,
      Household_Name: h.householdName || "",
      Members: h.participants?.length || 0,
      Visits: h.visitCount || 0,
      Last_Visited: h.lastVisitedAt ? new Date(h.lastVisitedAt).toISOString().slice(0, 10) : "",
      Coffee_Trees: h.coffeePlots || 0,
    }));
    const pRows = filtered.flatMap((h) =>
      (h.participants || []).map((p) => ({
        Household_ID: h.householdId,
        Household_Name: h.householdName || "",
        Participant_ID: p.id,
        TNS_ID: p.tnsId || "",
        Name: [p.firstName, p.middleName, p.lastName].filter(Boolean).join(" "),
        Gender: p.gender || "",
        Phone: p.phoneNumber || "",
        Primary: p.primaryHouseholdMember ? "Yes" : "No",
        Coffee_Trees: plots(p),
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(hhRows), "Households");
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(pRows), "Participants");
    XLSX.writeFile(wb, `household_visits_${activeProject}.xlsx`);
  };

  // Dense, space-efficient row with inline expand
  const Row = ({ h }) => {
    const [open, setOpen] = useState(false);
    const primary = h.participants?.find((p) => p.primaryHouseholdMember) || h.participants?.[0];

    return (
      <Box sx={{ borderBottom: "1px solid #eee" }}>
        <ButtonBase
          onClick={() => setOpen((x) => !x)}
          sx={{
            width: "100%", textAlign: "left", borderRadius: 1,
            px: 1.25, py: 1, // tighter paddings
          }}
        >
          {/* Row grid: chevron | name/id | chips (members/visits/trees/last) */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "24px 1fr auto",
              alignItems: "center",
              gap: 1,
              width: "100%",
            }}
          >
            <KeyboardArrowDownIcon
              fontSize="small"
              sx={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "200ms",
                opacity: 0.7,
              }}
            />

            <Box sx={{ minWidth: 0 }}>
              <Typography noWrap sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                {h.householdName || "—"}
              </Typography>
              <Typography noWrap variant="caption" color="text.secondary">
                {h.householdId}
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="flex-end"
              sx={{ minWidth: 300, flexWrap: "wrap" }}
            >
              <Chip
                size="small"
                icon={<GroupOutlinedIcon />}
                label={`${h.participants?.length || 0} member${(h.participants?.length || 0) === 1 ? "" : "s"}`}
                variant="outlined"
              />
              <Chip
                size="small"
                icon={<CalendarMonthOutlinedIcon />}
                color={h.visitCount > 0 ? "success" : "default"}
                variant={h.visitCount > 0 ? "filled" : "outlined"}
                label={h.visitCount > 0 ? `${h.visitCount} visit${h.visitCount > 1 ? "s" : ""}` : "Never"}
              />
              <Chip
                size="small"
                icon={<GrassOutlinedIcon />}
                variant="outlined"
                label={`${h.coffeePlots || 0} trees`}
              />
              <Chip
                size="small"
                variant="outlined"
                label={`Last: ${fmtDate(h.lastVisitedAt)}`}
              />
            </Stack>
          </Box>
        </ButtonBase>

        <Collapse in={open} unmountOnExit>
          <Box sx={{ px: 1.25, pb: 1.25 }}>
            <Box
              sx={{
                border: "1px solid #eee",
                borderRadius: 1.5,
                overflow: "hidden",
                bgcolor: "white",
              }}
            >
              {/* participants head */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.9fr 0.7fr 1fr 0.6fr",
                  px: 1.5, py: 0.75,
                  bgcolor: "#0b2447", color: "white",
                  fontSize: 12.5, fontWeight: 600,
                }}
              >
                <Box>Name</Box><Box>TNS ID</Box><Box>Gender</Box><Box>Phone</Box>
                <Box sx={{ textAlign: "right" }}>Trees</Box>
              </Box>

              {(h.participants || []).map((p, i) => (
                <Box
                  key={p.id || i}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 0.9fr 0.7fr 1fr 0.6fr",
                    px: 1.5, py: 0.8,
                    borderTop: "1px solid #f3f3f3",
                    alignItems: "center",
                    fontSize: 13.5,
                  }}
                >
                  <Stack direction="row" spacing={0.75} alignItems="center" sx={{ minWidth: 0 }}>
                    {p.primaryHouseholdMember ? (
                      <Tooltip title="Primary household member">
                        <CheckCircleOutlineIcon fontSize="small" color="success" />
                      </Tooltip>
                    ) : (
                      <RadioButtonUncheckedIcon fontSize="small" sx={{ color: "#c7c7c7" }} />
                    )}
                    <Typography noWrap>
                      {[p.firstName, p.middleName, p.lastName].filter(Boolean).join(" ") || "—"}
                    </Typography>
                  </Stack>
                  <Typography noWrap>{p.tnsId || "—"}</Typography>
                  <Typography noWrap>{p.gender || "—"}</Typography>
                  <Typography noWrap>{p.phoneNumber || "—"}</Typography>
                  <Typography noWrap sx={{ textAlign: "right" }}>{plots(p)}</Typography>
                </Box>
              ))}

              <Box sx={{ px: 1.5, py: 0.6, bgcolor: (t) => alpha(t.palette.success.main, 0.05) }}>
                <Typography variant="caption" color="text.secondary">
                  Last visited: {fmtDate(h.lastVisitedAt)}{primary ? ` • Primary: ${[primary.firstName, primary.middleName, primary.lastName].filter(Boolean).join(" ")}` : ""}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Collapse>
      </Box>
    );
  };

  return (
    <div className="page__container">
      <Box sx={{ mb: 1.5, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1.5 }}>
        <Box>
          <Typography variant="h5" className="module__heading">Household Visits</Typography>
          <Typography variant="body2" color="text.secondary">
            Dense, fast list • inline participants • export to Excel
          </Typography>
        </Box>
        <Tooltip title="Export Excel">
          <IconButton onClick={exportExcel} aria-label="export" size="large">
            <DownloadIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Compact KPIs */}
      <Stack direction="row" spacing={1.5} sx={{ mb: 1.5 }}>
        <StatCard label="Households" value={totals.households} icon={<GroupOutlinedIcon fontSize="small" />} />
        <StatCard label="Visited" value={totals.visited} icon={<CheckCircleOutlineIcon fontSize="small" />} />
        <StatCard label="Never" value={totals.never} icon={<RadioButtonUncheckedIcon fontSize="small" />} />
        <StatCard label="Total Visits" value={totals.sumVisits} icon={<CalendarMonthOutlinedIcon fontSize="small" />} />
      </Stack>

      {/* Sleek filter bar */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          border: "1px solid #eee",
          mb: 1.5,
          p: 1.25,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Pill active={visit === "all"}     onClick={() => setVisit("all")}     icon={<RadioButtonUncheckedIcon fontSize="small" />} label="All"     count={totals.households} />
          <Pill active={visit === "visited"} onClick={() => setVisit("visited")} icon={<CheckCircleOutlineIcon fontSize="small" color="success" />}    label="Visited" count={totals.visited} />
          <Pill active={visit === "never"}   onClick={() => setVisit("never")}   icon={<RadioButtonUncheckedIcon fontSize="small" />}                label="Never"   count={totals.never} />
          <Box sx={{ width: 12 }} />
          <Pill active={coffee === "all"}     onClick={() => setCoffee("all")}     icon={<GrassOutlinedIcon fontSize="small" />}                      label="All trees" count={totals.households} />
          <Pill active={coffee === "with"}    onClick={() => setCoffee("with")}    icon={<GrassOutlinedIcon fontSize="small" color="success" />}      label="With"       count={totals.withCoffee} />
          <Pill active={coffee === "without"} onClick={() => setCoffee("without")} icon={<GrassOutlinedIcon fontSize="small" color="disabled" />}     label="Without"    count={totals.withoutCoffee} />
        </Stack>

        <TextField
          placeholder="Search households or participants…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          size="small"
          sx={{ width: { xs: "100%", md: 320 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {/* Virtualized list (70vh; adjust if you want) */}
      {!data && loading ? (
        <LoadingScreen />
      ) : (
        <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden", borderColor: "#eee" }}>
          {loading && <LinearProgress sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />}
          {filtered.length === 0 ? (
            <Box sx={{ p: 6, textAlign: "center" }}>
              <Typography variant="h6" sx={{ mb: 1 }}>No Households</Typography>
              <Typography variant="body2" color="text.secondary">Try changing filters or search.</Typography>
            </Box>
          ) : (
            <Virtuoso
              style={{ height: "70vh" }}
              data={filtered}
              itemContent={(_, h) => <Row h={h} />}
              increaseViewportBy={{ top: 200, bottom: 600 }}
              components={{
                Header: () => (
                  <Box sx={{ px: 1.25, py: 0.75, bgcolor: "#0b2447", color: "white", fontWeight: 600 }}>
                    {filtered.length.toLocaleString()} household{filtered.length === 1 ? "" : "s"}
                  </Box>
                ),
              }}
            />
          )}
        </Paper>
      )}
    </div>
  );
}
