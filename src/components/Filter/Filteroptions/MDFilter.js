import ProjectListDropdown from "../../ProjectDrop/ProjectListDropdown";
import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

const MDFilter = () => {
  const [projects, setProjects] = useState([
    { sf_project_id: 1, project_name: "Module 1" },
    { sf_project_id: 2, project_name: "Project 2" },
    { sf_project_id: 3, project_name: "Project 3" },
  ]);

  const [selectedProject, setSelectedProject] = useState(
    projects[0].sf_project_id
  );
  return (
    <div style={{ marginTop: "20px"}}>
    <ProjectListDropdown
          projects={projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          dropdownlabel1="Module Name"
        />    </div>
  )
}

export default MDFilter
