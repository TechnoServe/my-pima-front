import {
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RecentTrainingSessions = ({ trainingSessions }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          Training Sessions (
          <em>
            {trainingSessions
              ? trainingSessions.length > 0
                ? trainingSessions.filter(
                    (session) =>
                      session.session_date &&
                      new Date(session.session_date).getMonth() ===
                        new Date().getMonth()
                  ).length
                : 0
              : 0}{" "}
            sessions this month
          </em>
          )
        </Typography>
        <List>
          {trainingSessions ? (
            trainingSessions.length > 0 ? (
              trainingSessions
                .filter(
                  (session) =>
                    session.session_date &&
                    new Date(session.session_date).getMonth() ===
                      new Date().getMonth()
                )
                .map((session, index) => (
                  <ListItem
                    key={index}
                    onClick={() =>
                      navigate(`/in/trainsession/${session.ts_id}`)
                    }
                    disablePadding
                    style={{
                      backgroundColor: index % 2 === 0 ? "#eee" : "#fff",
                    }}
                  >
                    <ListItemButton>
                      <Chip
                        label={index + 1}
                        variant="outlined"
                        style={{
                          marginRight: "1rem",
                          color: "#fff",
                          backgroundColor: "#777",
                        }}
                      />
                      <ListItemText
                        primary={session.ts_name}
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          width: "100%",
                          color: "#555",
                          textShadow: "1px 1px 1px #fff",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                No Training Sessions
              </Typography>
            )
          ) : null}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentTrainingSessions;
