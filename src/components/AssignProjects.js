import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import { GrFormView } from "react-icons/gr";
import AssignModal from "./Modals/AssignModal";

const Styles = {
  marginTop: "15px",
  fontWeight: "400",
  color: "rgba(125, 127, 136, 1)",
  fontSize: "12px",
  maxWidth: "80%",
};

const AssignProjects = ({ allProjects }) => {
  return (
    <>
      <div style={{ margin: "10px 0 15px 0" }}>
        <h1>Projects Assignment</h1>
        <p style={Styles}>
          In the project assignment page you can assign projects to users.
        </p>
      </div>
      {allProjects && allProjects.length > 0 ? (
        <Grid container spacing={2}>
          {allProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.project_id}>
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {project.project_name}
                    </Typography>
                    <Typography variant="body4" color="text.secondary">
                      SF Id: <em>{project.sf_project_id}</em>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <GrFormView
                    size={30}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No projects found</p>
      )}

      {/* <AssignModal open={trainingGroups.length > 0 ? open : false} handleClose={() => setOpen(false)} data={list} title={title} /> */}
    </>
  );
};

export default AssignProjects;
