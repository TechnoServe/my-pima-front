import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProgramListDropdown = ({ programs, selectedProgram, setSelectedProgram }) => {
  const handleChange = (e) => {
    setSelectedProgram(e.target.value);
    localStorage.setItem("sustainability_program", e.target.value);
  };

  return (
    <div style={{ marginTop: "10px", alignSelf: "flex-end" }}>
      <InputLabel htmlFor="sustainability-program-select">Program</InputLabel>
      <FormControl className="dropdown__select">
        <Select
          id="sustainability-program-select"
          value={selectedProgram}
          onChange={handleChange}
          sx={{
            borderRadius: "5px",
            marginLeft: "10px",
            maxHeight: "50px",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
          }}
        >
          {programs.map((program, index) => (
            <MenuItem key={index} value={program}>
              {program}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ProgramListDropdown;
