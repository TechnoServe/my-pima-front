import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const RolesList = ({ roles, onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState(0);

  const handleRoleChange = (event, newValue) => {
    setSelectedRole(newValue);
    onSelectRole(roles[newValue]); // Pass the selected role to the parent component
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={selectedRole}
      onChange={handleRoleChange}
    >
      {roles.map((role, index) => (
        <Tab key={index} label={role.name} />
      ))}
    </Tabs>
  );
};

export default RolesList;
