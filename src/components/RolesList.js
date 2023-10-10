import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const RolesList = ({ roles, onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState(0);

  const handleRoleChange = (event, newValue) => {
    setSelectedRole(newValue);
    onSelectRole(roles[newValue]);
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={selectedRole}
      onChange={handleRoleChange}
    >
      {roles.map((role, index) => (
        <Tab
          key={index}
          label={role.role_name
            .replace(/_/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())}
          style={{
            alignItems: "flex-start",
            fontSize: ".8rem",
          }}
          title={role.role_desc}
        />
      ))}
    </Tabs>
  );
};

export default RolesList;
