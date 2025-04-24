import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FocusAreaSelector = ({ value, onChange, label, style }) => {
  const navigate = useNavigate();
  const handleChange = (event) => {
    const selected = event.target.value;
    onChange(selected);
    localStorage.setItem("active_focus_area", selected);
    if (selected === "sustainability") navigate("/in/sustainability/summary");
    else navigate("/in/dashboard");
  };

  return (
    <div style={{ marginTop: "10px", width: "auto", alignSelf: "flex-end" }}>
      <InputLabel htmlFor="focus-area-select" sx={style}>
        {label}
      </InputLabel>
      <FormControl className="dropdown__select">
        <Select
          id="focus-area-select"
          value={value}
          onChange={handleChange}
          sx={{
            borderRadius: "5px",
            marginLeft: "10px",
            maxHeight: "50px",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
          }}
        >
          <MenuItem value="agronomy">Pima Agronomy</MenuItem>
          <MenuItem value="sustainability">Pima Sustainability</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

FocusAreaSelector.defaultProps = {
  label: "Select Focus Area",
  style: {
    color: "#2B2B2B",
    marginBottom: "10px",
    fontSize: "14px",
  },
};

export default FocusAreaSelector;
