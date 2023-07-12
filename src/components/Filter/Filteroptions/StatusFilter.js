import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

const StatusFilter = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggleDropdown = (event) => {
    const value = event.target.value;

    setSelectedOption(value === selectedOption ? null : value);
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
            checked={selectedOption === "approved"}
            value="approved"
            onChange={handleToggleDropdown}
            size="small"
            disabled={selectedOption && selectedOption !== "approved"}
          />
        }
        labelPlacement="start"
        label="Aproved Session Image"
        sx={{ margin: "0", marginTop: "20px" }}
      />

      <FormControlLabel
        control={
          <Switch
            value="pending"
            checked={selectedOption === "pending"}
            onChange={handleToggleDropdown}
            size="small"
            disabled={selectedOption && selectedOption !== "pending"}
          />
        }
        labelPlacement="start"
        label="Pending Session Image"
        sx={{ margin: "0", marginTop: "20px" }}
      />

      <FormControlLabel
        control={
          <Switch
            value="rejected"
            checked={selectedOption === "rejected"}
            onChange={handleToggleDropdown}
            size="small"
            disabled={selectedOption && selectedOption !== "rejected"}
          />
        }
        labelPlacement="start"
        label="Rejected Session Image"
        sx={{ margin: "0", marginTop: "20px" }}
      />
    </div>
  );
};

export default StatusFilter;
