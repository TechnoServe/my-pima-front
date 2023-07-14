import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProjectListDropdown = ({
  projects,
  selectedProject,
  setSelectedProject,
  setFilteredGroups,
  dropdownlabel1,
  dropdownlabel2,
  style,
}) => {
  const handleProjectSelect = (event) => {
    setSelectedProject(event.target.value);
    setFilteredGroups([]);

    localStorage.setItem("fav_project", event.target.value);
  };

  return (
    <div
      style={{
        marginTop: "10px",
        width: "auto",
        alignSelf: "flex-end",
      }}
    >
      <div>
        <InputLabel htmlFor="project-dropdown" sx={style}>
          {dropdownlabel1}
        </InputLabel>
      </div>
      <div>
        <FormControl className="dropdown__select">
          <Select
            sx={{
              borderRadius: "5px",
              marginLeft: "10px",
              maxHeight: "50px",
              boxShadow: "0 4px 14px 0px rgba(0, 0, 0, 0.2)",
            }}
            id="project-dropdown"
            value={selectedProject}
            onChange={handleProjectSelect}
          >
            {projects.map((project, index) => (
              <MenuItem value={project.sf_project_id} key={index}>
                <p>{project.project_name}</p>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
ProjectListDropdown.defaultProps = {
  dropdownlabel1: "Project List",
  style: {
    color: "#2B2B2B",
    marginBottom: "10px",
    fontSize: "14px",
  },
};

export default ProjectListDropdown;
