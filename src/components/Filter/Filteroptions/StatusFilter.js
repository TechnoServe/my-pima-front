import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

const StatusFilter = ({ setFilter }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggleDropdown = (event) => {
    const value = event.target.value;

    setSelectedOption(value === selectedOption ? null : value);

    setFilter({
      sessionApproval: value,
    });
  };

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <FormControlLabel
        control={
          <Switch
            value="invalid"
            checked={selectedOption === "invalid"}
            onChange={handleToggleDropdown}
            size="small"
            disabled={selectedOption && selectedOption !== "invalid"}
          />
        }
        labelPlacement="start"
        label="Invalid Images"
        sx={{ margin: "0", marginTop: "20px" }}
      />

      <FormControlLabel
        control={
          <Switch
            value="unclear"
            checked={selectedOption === "unclear"}
            onChange={handleToggleDropdown}
            size="small"
            disabled={selectedOption && selectedOption !== "unclear"}
          />
        }
        labelPlacement="start"
        label="UnClear Images"
        sx={{ margin: "0", marginTop: "20px" }}
      />

      <FormControlLabel
        control={
          <Switch
            checked={selectedOption === "approved"}
            value="approved"
            onChange={handleToggleDropdown}
            size="small"
            disabled={selectedOption && selectedOption !== "approved"}
          />
        }
        labelPlacement="start"
        label="Approved Images"
        sx={{ margin: "0", marginTop: "20px" }}
      />
    </div>
  );
};

export default StatusFilter;
