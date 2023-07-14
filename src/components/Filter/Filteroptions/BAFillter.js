import ProjectListDropdown from "../../ProjectDrop/ProjectListDropdown";
import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

const BAFilter = ({ isSelected }) => {
  const [projects, setProjects] = useState([
    { sf_project_id: 1, project_name: "Project 1" },
    { sf_project_id: 2, project_name: "Project 2" },
    { sf_project_id: 3, project_name: "Project 3" },
  ]);

  const [selectedProject, setSelectedProject] = useState(
    projects[0].sf_project_id
  );

  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [showThirdDropdown, setShowThirdDropdown] = useState(false);

  const handleToggleSecondDropdown = () => {
    setShowSecondDropdown((prevState) => !prevState);
  };

  const handleToggleThirdDropdown = () => {
    setShowThirdDropdown((prevState) => !prevState);
  };

  return (
      <div style={{ marginTop: "20px"}}>
        <ProjectListDropdown
          projects={projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          dropdownlabel1="Business Advisor"
        />
<div  style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <div>
        <FormControlLabel
          control={
            <Switch
              checked={showSecondDropdown}
              onChange={handleToggleSecondDropdown}
              size="small"
            />
          }
          labelPlacement="start"
          label="Farmer Trainer"
          sx={{ margin: "0" , marginTop: "20px"}}
        />

        {showSecondDropdown && (
          <ProjectListDropdown
            projects={projects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            dropdownlabel2="Select FT"
            style={{ display: "none" }}
          />
        )}
</div>
<div>
        <FormControlLabel
          control={
            <Switch
              checked={showThirdDropdown}
              onChange={handleToggleThirdDropdown}
              size="small"
            />
          }
          label="Training Group Name"
          labelPlacement="start"
          sx={{ margin: "0" , marginTop: "20px"}}

        />

        {showThirdDropdown && (
          <ProjectListDropdown
            projects={projects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            style={{ display: "none" }}
          />
        )}
        </div>
        </div>
      </div>
  );
};

export default BAFilter;
