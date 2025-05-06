import React from "react";
import { Card, CardContent, Typography, Box, CircularProgress } from "@mui/material";
import { WarningAmber } from "@mui/icons-material";

export default function ChecklistCard({
  title,
  items = [],
  loading,
  error,
  emptyMessage = "None",
}) {
  return (
    <Card className="chart-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>

        {loading ? (
          <Box
            sx={{
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error.message}</Typography>
        ) : items.length === 0 ? (
          <Typography>{emptyMessage}</Typography>
        ) : (
          <Box component="ul" className="checklist">
            {items.map((label) => (
              <Box key={label} className="checklist-line">
                <WarningAmber color="warning" />
                <Typography noWrap sx={{ ml: 1, flex: 1 }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
