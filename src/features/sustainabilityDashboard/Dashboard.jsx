import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { CheckCircle, Construction, WarningAmber } from "@mui/icons-material";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import "./new.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const WETMILLS = [
  { id: "1", name: "Alpha Wetmill" },
  { id: "2", name: "Beta Cooperative" },
  { id: "3", name: "Gamma Processing" },
];

function TabPanel({ children, value, index, ...props }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...props}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

export default function DashboardFeature() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [tab, setTab] = useState(0);
  const [wetmill, setWetmill] = useState(WETMILLS[0].id);

  const handleTab = (_, v) => setTab(v);
  const handleMill = (e) => setWetmill(e.target.value);

  // ── Dummy Data ─────────────────────────────────────────────────────────────

  // Existing...
  const profileStatus = {
    labels: ["Cooperative", "Private"],
    datasets: [{
      data: [60, 40],
      borderColor: ["#087c8f", "#cccccc"],
      borderWidth: 4,
      hoverOffset: 20,
      cutout: "70%",
    }],
  };

  const profileExport = {
    labels: ["Exporter", "Non-exporter"],
    datasets: [{
      data: [30, 70],
      borderColor: ["#005f6b", "#dddddd"],
      borderWidth: 4,
      hoverOffset: 20,
      cutout: "70%",
    }],
  };

  const managerNeeds = {
    labels: ["Equipment", "Training", "Quality"],
    datasets: [{
      label: "Priority (1=highest)",
      data: [1, 2, 3],
      backgroundColor: "#087c8f",
      borderRadius: 6,
    }],
  };

  const infraChecklist = [
    { name: "Drying Tables", ok: true, repair: false },
    { name: "Pulp Hopper", ok: false, repair: true },
    { name: "Vetiver Wetland", ok: true, repair: false },
  ];

  const financials = {
    labels: ["Farmers’ Payment", "Reserves", "Social Activities"],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ["#087c8f", "#005f6b", "#cccccc"],
      borderWidth: 2,
    }],
  };

  const employees = {
    labels: ["Board M", "Board F", "Staff M", "Staff F"],
    datasets: [{
      label: "Count",
      data: [5, 3, 8, 4],
      backgroundColor: "#087c8f",
      borderRadius: 4,
      maxBarThickness: 40,
    }],
  };

  const processingWater = {
    labels: ["Meter", "Record Book", "Reduction Effort"],
    datasets: [{
      label: "Compliant",
      data: [1, 0, 1],
      backgroundColor: ["#27ae60", "#e67e22", "#2980b9"],
      borderRadius: 6,
    }],
  };

  const cpqi = {
    labels: ["Reception", "Fermentation", "Washing"],
    datasets: [
      { label: "Yes", data: [80, 60, 90], backgroundColor: "#087c8f" },
      { label: "No",  data: [20, 40, 10], backgroundColor: "#dddddd" },
    ],
  };

  const attendance = {
    labels: ["Topic A", "Topic B", "Topic C"],
    datasets: [
      { label: "Male",   data: [20, 15, 10], backgroundColor: "#087c8f" },
      { label: "Female", data: [18, 12,  8], backgroundColor: "#005f6b" },
    ],
  };

  const kpisLine = {
    datasets: [{
      label: "Cherry Price (USD)",
      data: [
        { x: "2025-01-01", y: 0.25 },
        { x: "2025-02-01", y: 0.28 },
        { x: "2025-03-01", y: 0.30 },
      ],
      borderColor: "#087c8f",
      borderWidth: 3,
      tension: 0.4,
      fill: "start",
      backgroundColor: ctx => {
        const {ctx: c, chart} = ctx.chart;
        const gradient = c.createLinearGradient(0, 0, 0, chart.height);
        gradient.addColorStop(0, "rgba(8,124,143,0.5)");
        gradient.addColorStop(1, "rgba(8,124,143,0.1)");
        return gradient;
      },
      pointRadius: 5,
      pointHoverRadius: 8,
    }],
  };

  const kpiPie = {
    labels: ["A1", "A2", "A3", "Other"],
    datasets: [{
      data: [40, 30, 20, 10],
      borderColor: ["#087c8f", "#005f6b", "#cccccc", "#eeeeee"],
      borderWidth: 3,
      hoverOffset: 15,
      cutout: "65%",
    }],
  };

  const wastewater = {
    labels: ["Lagoon", "Wetland", "None"],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ["#27ae60", "#2980b9", "#e74c3c"],
      borderRadius: 6,
    }],
  };

  // — NEW: Missing Documents list for Profile
  const missingDocs = [
    "Operating License",
    "Safety Certificate",
    "Water Usage Log",
  ];

  // — NEW: Overall Attendance & Age Distribution
  const attendanceOverall = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [35, 30],
        backgroundColor: ["#087c8f", "#005f6b"],
        cutout: "65%",
        borderWidth: 4,
      },
    ],
  };
  const attendanceAge = {
    labels: ["≤30 (Youth)", ">30"],
    datasets: [
      {
        data: [40, 25],
        backgroundColor: ["#27ae60", "#e67e22"],
        cutout: "65%",
        borderWidth: 4,
      },
    ],
  };

  // — NEW: KPIs stats + weekly & monthly cherry price
  const kpiStats = { price: 0.30, totalSales: 50000 };
  const cherryWeekly = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Cherry $/kg",
        data: [0.25, 0.28, 0.30, 0.32],
        borderColor: "#087c8f",
        backgroundColor: (ctx) => {
          const grad = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
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
        data: [0.25, 0.27, 0.30, 0.28, 0.31, 0.33],
        borderColor: "#005f6b",
        backgroundColor: (ctx) => {
          const grad = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
          grad.addColorStop(0, "rgba(0,95,107,0.5)");
          grad.addColorStop(1, "rgba(0,95,107,0.1)");
          return grad;
        },
        fill: "start",
        tension: 0.4,
      },
    ],
  };
  const parchment = {
    labels: ["A1", "A2", "A3", "Other"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ["#087c8f", "#005f6b", "#cccccc", "#eeeeee"],
        cutout: "65%",
        borderWidth: 3,
      },
    ],
  };

  // — NEW: Wastewater distance bar
  const wastewaterDistance = {
    labels: ["Site A", "Site B", "None"],
    datasets: [
      {
        label: "Distance (m)",
        data: [120, 40, 0],
        backgroundColor: (ctx) => {
          const v = ctx.parsed.y;
          if (v === 0) return "#888888";
          return v >= 50 ? "#27ae60" : "#e74c3c";
        },
        borderRadius: 4,
        maxBarThickness: 40,
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        labels: { boxWidth: 12, usePointStyle: true },
      },
      tooltip: { mode: "index", intersect: false, padding: 10 },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { borderDash: [5, 5] }, beginAtZero: true },
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
          <Select value={wetmill} label="Wetmill" onChange={handleMill}>
            {WETMILLS.map((w) => (
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
          (label, i) => (
            <Tab key={label} label={label} />
          )
        )}
      </Tabs>

      {/* Profile Tab */}
      <TabPanel value={tab} index={0}>
        <Box className="charts-grid">
          {/* Mill Status */}
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Mill Status</Typography>
              <Doughnut data={profileStatus} options={commonOptions} />
            </CardContent>
          </Card>
          {/* Exporter Status */}
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Exporter Status</Typography>
              <Doughnut data={profileExport} options={commonOptions} />
            </CardContent>
          </Card>
          {/* Manager Needs */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">Manager Needs Ranking</Typography>
              <Bar data={managerNeeds} options={commonOptions} />
            </CardContent>
          </Card>
          {/* Infrastructure */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">Infrastructure Checklist</Typography>
              <Box component="ul" className="checklist">
                {infraChecklist.map((i) => (
                  <li key={i.name}>
                    {i.ok ? (
                      <CheckCircle color="success" />
                    ) : (
                      <CheckCircle color="disabled" />
                    )}
                    <Typography component="span" sx={{ ml: 1 }}>
                      {i.name}
                    </Typography>
                    {i.repair && (
                      <Construction
                        fontSize="small"
                        color="warning"
                        sx={{ ml: 1 }}
                      />
                    )}
                  </li>
                ))}
              </Box>
            </CardContent>
          </Card>
          {/* New: Missing Documents */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">Missing Documents</Typography>
              <Box className="checklist">
                {missingDocs.map((d) => (
                  <Box key={d} className="checklist-line">
                    <WarningAmber color="warning" />
                    <Typography sx={{ ml: 1 }}>{d}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
          {/* Profit Usage */}
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Profit Usage</Typography>
              <Doughnut data={financials} options={commonOptions} />
            </CardContent>
          </Card>
          {/* Employees */}
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Employees by Gender/Type</Typography>
              <Bar data={employees} options={commonOptions} />
            </CardContent>
          </Card>
        </Box>
      </TabPanel>

      {/* Processing Tab */}
      <TabPanel value={tab} index={1}>
        <Box className="charts-grid">
          {/* Water & Energy Compliance */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">Water & Energy Compliance</Typography>
              <Bar
                data={processingWater}
                options={{
                  ...commonOptions,
                  scales: {
                    ...commonOptions.scales,
                    x: { stacked: true },
                    y: { stacked: true },
                  },
                }}
              />
            </CardContent>
          </Card>
          {/* CPQI Scores */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">CPQI Scores</Typography>
              <Bar
                data={cpqi}
                options={{
                  ...commonOptions,
                  scales: {
                    ...commonOptions.scales,
                    x: { stacked: true },
                    y: { stacked: true },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Box>
      </TabPanel>

      {/* Attendance Tab */}
      <TabPanel value={tab} index={2}>
        <Box className="charts-grid">
          {/* Training by Gender */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">Training Attendance by Gender</Typography>
              <Bar data={attendance} options={commonOptions} />
            </CardContent>
          </Card>
          {/* New: Overall Unique Attendees */}
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Overall Unique Attendees</Typography>
              <Doughnut data={attendanceOverall} options={commonOptions} />
            </CardContent>
          </Card>
          {/* New: Age Distribution */}
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Age Distribution</Typography>
              <Doughnut data={attendanceAge} options={commonOptions} />
            </CardContent>
          </Card>
        </Box>
      </TabPanel>

      {/* KPIs Tab */}
      <TabPanel value={tab} index={3}>
        <Box className="charts-grid">
          {/* New: Stat Cards */}
          <Card className="stat-card">
            <CardContent>
              <Typography variant="subtitle2">
                End-of-Season Cherry Price
              </Typography>
              <Typography variant="h5">
                ${kpiStats.price.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent>
              <Typography variant="subtitle2">Total Sales (USD)</Typography>
              <Typography variant="h5">
                ${kpiStats.totalSales.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
          {/* New: Cherry Weekly */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">Cherry Price Weekly</Typography>
              <Line data={cherryWeekly} options={commonOptions} />
            </CardContent>
          </Card>
          {/* New: Cherry Monthly */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">Cherry Price Monthly</Typography>
              <Line data={cherryMonthly} options={commonOptions} />
            </CardContent>
          </Card>
          {/* Existing: Parchment */}
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Parchment Grades</Typography>
              <Doughnut data={kpiPie} options={commonOptions} />
            </CardContent>
          </Card>
          {/* New: Parchment Distribution */}
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Parchment Distribution</Typography>
              <Doughnut data={parchment} options={commonOptions} />
            </CardContent>
          </Card>
        </Box>
      </TabPanel>

      {/* Wastewater Tab */}
      <TabPanel value={tab} index={4}>
        <Box className="charts-grid">
          {/* Existing: Method Used */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">
                Wastewater Management Method
              </Typography>
              <Doughnut data={wastewater} options={commonOptions} />
            </CardContent>
          </Card>
          {/* New: Distance to Waterbody */}
          <Card className="chart-card full-width">
            <CardContent>
              <Typography variant="h6">
                Distance to Waterbody
              </Typography>
              <Bar data={wastewaterDistance} options={commonOptions} />
            </CardContent>
          </Card>
        </Box>
      </TabPanel>
    </Box>
  );
}
