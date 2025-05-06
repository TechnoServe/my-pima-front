import React from "react";
import { Card, CardContent, Typography, Box, CircularProgress } from "@mui/material";

export default function ChartCard({
  title,
  loading,
  error,
  height = 200,
  children,
}) {
  return (
    <Card className="chart-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        {loading ? (
          <Box
            sx={{
              height,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error.message}</Typography>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
}
