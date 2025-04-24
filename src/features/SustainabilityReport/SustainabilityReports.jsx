import React, { useState } from "react";
import { Card, CardContent, MenuItem, Select, InputLabel, FormControl, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import Papa from "papaparse";
import { saveAs } from "file-saver";

const surveyReportTypes = {
  CPQI: ["CPQI Summary per Wetmill", "Compliance Score Breakdown", "Non-compliance Rates"],
  Employees: ["Employee Count", "Gender Breakdown", "Training Status"],
  Financials: ["Compliance Overview", "Loan/Grant Access", "Revenue vs Expense"],
  Infrastructure: ["Missing Items", "Score Summary"],
  KPIs: ["Trend by Wetmill", "Benchmark Comparison", "Score Summary"],
  "Manager Needs Assessment": ["Top Needs", "Skill Gap Summary", "Training Needs"],
  "Training Attendance Recording": ["Attendance Summary", "Trainer Overview"],
  "Waste Water Management": ["Treatment Facility Status", "Regulation Compliance", "Risk Index"],
};

const SustainabilityReports = () => {
  const [selectedSurvey, setSelectedSurvey] = useState("");
  const [selectedReportType, setSelectedReportType] = useState("");

  const exportToCSV = () => {
    const sampleData = [
      { name: "Wetmill A", score: 89, compliant: true },
      { name: "Wetmill B", score: 72, compliant: false },
    ];

    const csv = Papa.unparse(sampleData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${selectedSurvey}_${selectedReportType}.csv`);
  };

  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%", maxWidth: 700, padding: 4, boxShadow: 4, borderRadius: 4 }}>
        <CardContent>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
            <DescriptionIcon sx={{ fontSize: 30, marginRight: "0.75rem", color: "#087c8f" }} />
            <Typography variant="h6" fontWeight={600}>Generate Sustainability Report</Typography>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
            <FormControl fullWidth>
              <InputLabel>Select Survey</InputLabel>
              <Select
                value={selectedSurvey}
                label="Select Survey"
                onChange={(e) => {
                  setSelectedSurvey(e.target.value);
                  setSelectedReportType("");
                }}
              >
                {Object.keys(surveyReportTypes).map((survey) => (
                  <MenuItem key={survey} value={survey}>
                    {survey}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth disabled={!selectedSurvey}>
              <InputLabel>Select Report Type</InputLabel>
              <Select
                value={selectedReportType}
                label="Select Report Type"
                onChange={(e) => setSelectedReportType(e.target.value)}
              >
                {selectedSurvey &&
                  surveyReportTypes[selectedSurvey].map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              disabled={!selectedSurvey || !selectedReportType}
              onClick={exportToCSV}
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: "#087c8f",
                "&:hover": { backgroundColor: "#005f6b" },
                borderRadius: 2,
                paddingX: 3
              }}
            >
              Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SustainabilityReports;
