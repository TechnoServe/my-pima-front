// src/features/dashboard/DashboardFeature.jsx
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ChartJS from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import InfoCard from "./components/infoCard";
import ChartCard from "../../components/Charts/ChartCard";
import ChecklistCard from "../../components/Charts/ChecklistCard";
import InfraChecklistCard from "./components/InfraChecklistCard";

import { useWetmillDashboardData } from "./hooks/useWetmillDashboardData";

import "./new.css";
import { Cancel, CheckCircle } from "@mui/icons-material";
import SectionedChecklistCard from "../../components/Charts/SectionedChecklistCard";

ChartJS.register(annotationPlugin);

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

export default function DashboardFeature() {
  // --- wetmill selection with persistence ---
  const { wetmills } = useOutletContext();
  const [wetmill, setWetmill] = useState(
    () => window.localStorage.getItem("selectedWetmill") || ""
  );
  useEffect(() => {
    if (!wetmill && wetmills.length) {
      const saved = window.localStorage.getItem("selectedWetmill");
      if (saved && wetmills.some((w) => w.id === saved)) {
        setWetmill(saved);
      } else {
        setWetmill(wetmills[0].id);
      }
    }
  }, [wetmills, wetmill]);
  useEffect(() => {
    if (wetmill) window.localStorage.setItem("selectedWetmill", wetmill);
  }, [wetmill]);

  // --- layout state ---
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tab, setTab] = useState(0);
  const handleTab = (_, v) => setTab(v);

  // --- current wetmill info ---
  const currentMill = wetmills.find((w) => w.id === wetmill) || {};
  const registrationInfo = {
    "Wetmill ID": currentMill.wet_mill_unique_id || wetmill,
    Name: currentMill.name || "N/A",
    "Registered On": currentMill.registration_date || "N/A",
    Ownership: currentMill.mill_status || "N/A",
    "Exporting Status": currentMill.exporting_status || "N/A",
  };

  // --- pull all dashboard slices via hooks ---
  const {
    managerNeeds,       // { chartData, loading, error }
    missingDocuments,   // { items, loading, error }
    infrastructure,     // { items, goodItems, repairItems, loading, error }
    financials,         // { totalProfit, reserves, socialActivities, secondPaymentToFarmers }
    employeeStats,
    cpqiStats,
    cpqiChecklist,
    trainingByTopic,
    trainingOverall,
    kpiStats,
    parchmentDist,
  } = useWetmillDashboardData(wetmill);

  const raw = managerNeeds.raw || [];

  // Order: [2nd place, 1st place, 3rd place]
  const podiumOrder = [2, 1, 3];
  const podiumItems = podiumOrder.map((rnk) =>
    raw.find((r) => r.rank === rnk) || {}
  );

  const podiumLabels = podiumItems.map((i) => i.issue || "");
  const podiumRanks = podiumOrder; // [2,1,3]

  // Heights: 1st place = 3 units tall; 2nd & 3rd = 1 unit
  const podiumHeights = podiumOrder.map((rnk) => (rnk === 1 ? 2 : 1));

  const podiumData = {
    labels: podiumLabels,
    datasets: [
      {
        data: podiumHeights,
        backgroundColor: ["#C0C0C0", "#1b2a4e", "#C0C0C0"],
        borderRadius: { topLeft: 12, topRight: 12 },
        barThickness: 60,
      },
    ],
  };

  const podiumOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          // show the issue as title
          title: (ctx) => podiumLabels[ctx[0].dataIndex],
          // show the actual rank number as the label
          label: (ctx) => `Rank: ${podiumRanks[ctx.dataIndex]}`,
        },
      },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  // --- dummy data for charts we haven't wired yet ---

  const processingWater = {
    labels: ["Meter", "Record Book", "Reduction Effort"],
    datasets: [
      {
        label: "Compliant",
        data: [1, 0, 1],
        backgroundColor: ["#1b2a4e", "#e67e22", "#2980b9"],
        borderRadius: 6,
      },
    ],
  };

  const cherryWeekly = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Cherry $/kg",
        data: [0.25, 0.28, 0.3, 0.32],
        borderColor: "#087c8f",
        backgroundColor: (ctx) => {
          const c = ctx.chart.ctx;
          const grad = c.createLinearGradient(0, 0, 0, 200);
          grad.addColorStop(0, "rgba(8,124,143,0.5)");
          grad.addColorStop(1, "rgba(8,124,143,0.1)");
          return grad;
        },
        fill: "start",
        tension: 0.4,
      },
    ],
  };

  const cherryMonthly = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Cherry $/kg",
        data: [0.25, 0.27, 0.3, 0.28, 0.31, 0.33],
        borderColor: "#005f6b",
        backgroundColor: (ctx) => {
          const c = ctx.chart.ctx;
          const grad = c.createLinearGradient(0, 0, 0, 200);
          grad.addColorStop(0, "rgba(0,95,107,0.5)");
          grad.addColorStop(1, "rgba(0,95,107,0.1)");
          return grad;
        },
        fill: "start",
        tension: 0.4,
      },
    ],
  };

  const wastewaterDistance = {
    labels: ["Lagoon"],
    datasets: [
      {
        label: "Distance (m)",
        data: [120],
        backgroundColor: (ctx) =>
          ctx.parsed.y >= 50 ? "#1b2a4e" : "#e74c3c",
        borderRadius: 4,
        maxBarThickness: 40,
      },
    ],
  };
  const recommendedDistance = 50;

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: "top", labels: { boxWidth: 12, usePointStyle: true } },
      tooltip: { mode: "index", intersect: false, padding: 10 },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { borderDash: [5, 5] }, beginAtZero: true },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: { padding: { top: 0, bottom: 0, left: 0, right: 0 } },
    plugins: {
      legend: { position: "top", labels: { boxWidth: 12, usePointStyle: true, padding: 10 } },
      tooltip: { mode: "nearest", intersect: false, padding: 10 },
    },
  };

  return (
    <Box className="dashboard-container">
      {/* Header */}
      <Box
        className="dashboard-header"
        sx={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <Typography variant="h5" className="dashboard-title">
          Wetmill Dashboard
        </Typography>
        <FormControl size="small">
          <InputLabel>Wetmill</InputLabel>
          <Select
            value={wetmill}
            label="Wetmill"
            onChange={(e) => setWetmill(e.target.value)}
          >
            {wetmills.map((w) => (
              <MenuItem key={w.id} value={w.id}>
                {w.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={handleTab}
        indicatorColor="primary"
        textColor="primary"
        variant={isMobile ? "scrollable" : "standard"}
        allowScrollButtonsMobile
      >
        {["Profile", "Processing", "Attendance", "KPIs", "Wastewater"].map(
          (label) => (
            <Tab key={label} label={label} />
          )
        )}
      </Tabs>

      {/* Profile Tab */}
      <TabPanel value={tab} index={0}>
        <Box className="charts-grid">
          <InfoCard title="Registration Info" data={registrationInfo} />

          <ChartCard
            title="Manager Needs Ranking"
            loading={managerNeeds.loading}
            error={managerNeeds.error}
            height={300}  // give it some vertical room
          >
            <Bar data={podiumData} options={podiumOptions} />
          </ChartCard>

          <ChecklistCard
            title="Missing Documents"
            items={missingDocuments.items}
            loading={missingDocuments.loading}
            error={missingDocuments.error}
            emptyMessage="No documents missing :)"
          />

          {/* Profit Usage */}
          <ChartCard
            title="Profit Usage"
            loading={financials.loading}
            error={financials.error}
            height={250}
          >
            <Doughnut
              data={financials.chartData}
              options={financials.chartOptions}
              plugins={financials.plugins}
            />
          </ChartCard>

          {/* Dummy Employees */}
          <ChartCard
            title="Employees"
            loading={employeeStats.loading}
            error={employeeStats.error}
            height={900}
          >
            <Bar
              data={employeeStats.chartData}
              options={employeeStats.chartOptions}
            />
          </ChartCard>

          <InfraChecklistCard
            title="Infrastructure Checklist"
            list={infrastructure.items.map((name) => ({
              name,
              ok: infrastructure.goodItems.includes(name),
              repair: infrastructure.repairItems.includes(name),
            }))}
            loading={infrastructure.loading}
            error={infrastructure.error}
          />
        </Box>
      </TabPanel>

      {/* Processing Tab */}
      <TabPanel value={tab} index={1}>
        <Box className="charts-grid">
          <ChartCard title="Water & Energy Compliance">
            <Bar
              data={processingWater}
              options={{
                ...commonOptions,
                scales: { x: { stacked: true }, y: { stacked: true } },
              }}
            />
          </ChartCard>

          {/* Overall doughnut */}
          <ChartCard
            title="CPQI Overall Compliance"
            loading={cpqiStats.statsLoading}
            error={cpqiStats.statsError}
            height={200}
          >
            <Doughnut
              data={cpqiStats.pie.pieData}
              options={cpqiStats.pie.pieOptions}
            />
          </ChartCard>

          {/* Stacked bar by section */}
          <ChartCard
            title="CPQI by Criteria"
            loading={cpqiStats.statsLoading}
            error={cpqiStats.statsError}
            height={300}
          >
            <Bar
              data={cpqiStats.bar.chartData}
              options={cpqiStats.bar.chartOptions}
            />
          </ChartCard>

          {/* CPQI Detailed Checklist */}
          <SectionedChecklistCard
            title="CPQI Detailed Checklist"
            sections={cpqiChecklist.sections}
            loading={cpqiChecklist.loading}
            error={cpqiChecklist.error}
            emptyMessage="No CPQI data available"
          />

        </Box>
      </TabPanel>

      {/* Attendance Tab */}
      <TabPanel value={tab} index={2}>
        <Box className="charts-grid">
          <ChartCard
            title="Training Attendance by Topic"
            loading={trainingByTopic.loading}
            error={trainingByTopic.error}
          >
            <Bar
              data={trainingByTopic.chartData}
              options={{
                ...commonOptions,
                scales: {
                  x: {
                    grid: { display: false },
                    ticks: {
                      maxRotation: 45,
                      minRotation: 45,
                      callback: (_, index) => {
                        const label = trainingByTopic.chartData.labels[index] || "";
                        return label.length > 15
                          ? label.slice(0, 15) + "…"
                          : label;
                      },
                    },
                  },
                  y: commonOptions.scales.y,
                },
              }}
            />
          </ChartCard>

          <ChartCard
            title="Overall Unique Attendees"
            loading={trainingOverall.loading}
            error={trainingOverall.error}
            height={200}
          >
            <Doughnut
              data={trainingOverall.chartData}
              options={{
                ...pieOptions,
                aspectRatio: 1,              // perfectly square
                layout: { padding: 20 },
              }}
            />
          </ChartCard>
        </Box>
      </TabPanel>

      {/* KPIs Tab */}
      <TabPanel value={tab} index={3}>
        <Box className="charts-grid">
          <InfoCard
            title="End-of-Season Cherry Price"
            data={{ Price: `$${kpiStats.price.toFixed(2)}` }}
            loading={kpiStats.loading}
            error={kpiStats.error}
          />

          <InfoCard
            title="Total Sales (USD)"
            data={{ Sales: `$${kpiStats.totalSales.toLocaleString()}` }}
            loading={kpiStats.loading}
            error={kpiStats.error}
          />

          {/* <ChartCard title="Cherry Price Weekly">
            <Line data={cherryWeekly} options={commonOptions} />
          </ChartCard>

          <ChartCard title="Cherry Price Monthly">
            <Line data={cherryMonthly} options={commonOptions} />
          </ChartCard>*/}

          <ChartCard title="Parchment Grades">
            <Doughnut data={parchmentDist.chartData} options={pieOptions} />
          </ChartCard> 

          <ChartCard
            title="Parchment Distribution"
            loading={parchmentDist.loading}
            error={parchmentDist.error}
          >
            <Doughnut data={parchmentDist.chartData} options={pieOptions} />
          </ChartCard>
        </Box>
      </TabPanel>

      {/* Wastewater Tab */}
      <TabPanel value={tab} index={4}>
        <Box className="charts-grid">
          <InfoCard
            title="Wastewater Management Method"
            data={{ Method: currentMill.waste_water_management_method || "Lagoon" }}
          />

          <ChartCard title="Distance to Waterbody">
            <Bar
              data={wastewaterDistance}
              options={{
                ...commonOptions,
                scales: {
                  x: commonOptions.scales.x,
                  y: {
                    ...commonOptions.scales.y,
                    suggestedMax: recommendedDistance * 1.2,
                  },
                },
                plugins: {
                  ...commonOptions.plugins,
                  annotation: {
                    annotations: {
                      minLine: {
                        type: "line",
                        scaleID: "y",
                        value: recommendedDistance,
                        borderColor: "#e74c3c",
                        borderWidth: 2,
                        borderDash: [6, 6],
                        label: {
                          enabled: true,
                          content: `Min ${recommendedDistance} m`,
                          position: "end",
                          backgroundColor: "rgba(231,76,60,0.8)",
                          color: "#fff",
                          font: { weight: "bold" },
                        },
                      },
                    },
                  },
                },
              }}
            />
          </ChartCard>
        </Box>
      </TabPanel>
    </Box>
  );
}
