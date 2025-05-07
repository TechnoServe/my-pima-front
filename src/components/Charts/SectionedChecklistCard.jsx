import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    CircularProgress,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

export default function SectionedChecklistCard({
    title,
    sections = [],
    loading,
    error,
    emptyMessage = "Nothing to show",
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
                ) : sections.length === 0 ? (
                    <Typography>{emptyMessage}</Typography>
                ) : (
                    sections.map((sec) => (
                        <Box key={sec.sectionName} sx={{ mb: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600, mb: 1 }}
                            >
                                {sec.sectionName}
                            </Typography>
                            <Box component="ul" className="checklist">
                                {sec.criteria.map((c) => (
                                    <li key={c.questionName} className="checklist-line">
                                        {c.yes
                                            ? <CheckCircle color="success" fontSize="small" />
                                            : <Cancel color="error" fontSize="small" />}
                                        <Typography component="span" sx={{ ml: 1 }}>
                                            {c.questionName.replace(/_/g, " ")}
                                        </Typography>
                                    </li>
                                ))}
                            </Box>
                        </Box>
                    ))
                )}
            </CardContent>
        </Card>
    );
}
