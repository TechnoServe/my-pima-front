import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function InfoCard({ title, data = {} }) {
  return (
    <Card className="chart-card full-width info-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Box className="info-grid">
          {Object.entries(data).map(([label, value]) => (
            <Box key={label} className="info-item">
              <Typography variant="overline" color="textSecondary">
                {label}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
