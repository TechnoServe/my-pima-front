import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import UsersList from "../components/UsersList";
import UsersForm from "../components/UsersForm";

const Users = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleUserSubmit = (user) => {
    // Implement adding or modifying user logic and update the users state
    // You can use the setUsers function
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {!users || users.length === 0 ? (
          <Typography variant="h6">No users found</Typography>
        ) : (
          <UsersList users={users} onSelect={handleUserSelect} />
        )}
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={5}>
        <UsersForm
          onSubmit={handleUserSubmit}
          selectedUser={selectedUser}
          onSelect={handleUserSelect}
        />
      </Grid>
    </Grid>
  );
};

export default Users;
