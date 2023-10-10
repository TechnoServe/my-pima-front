import { useQuery } from "@apollo/client";
import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { GET_TRAINING_MODULES_PER_PROJECT } from "../../../graphql/queries/trainingModulesRequests";

const MDFilter = ({ setFilter, data, selectedProject }) => {
  const [selectedModule, setSelectedModule] = useState("");

  const getProjectModules = useQuery(GET_TRAINING_MODULES_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });

  useEffect(() => {
    if (
      getProjectModules.data &&
      getProjectModules.data.getTrainingModulesByProject &&
      getProjectModules.data.getTrainingModulesByProject.status === 200
    ) {
      if (
        getProjectModules.data.getTrainingModulesByProject.training_modules
          .length === 0
      ) {
        setSelectedModule(
          getProjectModules.data.getTrainingModulesByProject.training_modules
            .filter((module) =>
              data.map((d) => d.ts_module).includes(module.tm_title)
            )
            .sort((a, b) => new Date(b.tm_date) - new Date(a.tm_date))[0]
            .tm_title
        );

        setFilter({
          moduleName:
            getProjectModules.data.getTrainingModulesByProject.training_modules
              .filter((module) =>
                data.map((d) => d.ts_module).includes(module.tm_title)
              )
              .sort((a, b) => new Date(b.tm_date) - new Date(a.tm_date))[0]
              .tm_title,
        });
      }
    }
  }, [selectedProject]);

  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        value={selectedModule}
        onChange={(event) => {
          setSelectedModule(event.target.value);
          setFilter({
            moduleName: event.target.value,
          });
        }}
        sx={{
          borderRadius: "5px",
          marginLeft: "10px",
          maxHeight: "50px",
          boxShadow: "0 4px 14px 0px rgba(0, 0, 0, 0.2)",
        }}
        displayEmpty
      >
        <MenuItem value="" selected disabled>
          Select Module
        </MenuItem>
        {[...new Set(data.map((d) => d.ts_module))].map((module) => (
          <MenuItem key={module} value={module}>
            {module}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default MDFilter;
