// Permissions.js
import React, { useState } from "react";
import RolesList from "../components/RolesList";
import PermissionsList from "../components/PermissionsList";
import { Grid } from "@mui/material";

const roles = [
  { name: "Admin", id: "admin" },
  { name: "User", id: "user" },
  // Add more roles as needed
];

const Permissions = () => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <RolesList roles={roles} onSelectRole={handleRoleSelect} />
      </Grid>
      <Grid item xs={9}>
        <PermissionsList role={selectedRole} />
      </Grid>
    </Grid>
  );
};

export default Permissions;
