import React from "react";
import { Card, CardContent, Typography, Box, CircularProgress } from "@mui/material";
import { CheckCircle, Cancel, Construction } from "@mui/icons-material";

export default function InfraChecklistCard({
  title,
  list = [],     // array of { name, ok, repair }
  loading,
  error,
}) {
  return (
    <Card className="chart-card full-width">
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
        ) : (
          <Box component="ul" className="checklist">
            {list.map((i) => (
              <li key={i.name}>
                {i.ok ? (
                  <CheckCircle color="success" />
                ) : (
                  <Cancel color="error" />
                )}
                <Typography component="span" sx={{ ml: 1 }}>
                  {i.name}
                </Typography>
                {i.repair && (
                  <Construction fontSize="small" color="warning" sx={{ ml: 1 }} />
                )}
              </li>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
