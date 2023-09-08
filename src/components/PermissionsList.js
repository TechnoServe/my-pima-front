// PermissionsList.js
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const PermissionsList = ({ role }) => {
  const [permissions, setPermissions] = useState({
    read: false,
    write: false,
    delete: false,
  });

  const handlePermissionChange = (event) => {
    const { name, checked } = event.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h4>{role.name} Permissions</h4>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.read}
              onChange={handlePermissionChange}
              name="read"
            />
          }
          label="Read"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.write}
              onChange={handlePermissionChange}
              name="write"
            />
          }
          label="Write"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.delete}
              onChange={handlePermissionChange}
              name="delete"
            />
          }
          label="Delete"
        />
      </FormGroup>
    </div>
  );
};

export default PermissionsList;
