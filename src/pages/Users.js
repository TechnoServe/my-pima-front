import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import UsersList from "../components/UsersList";
import UsersForm from "../components/UsersForm";

const Users = ({ users, setUsers }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleUserSubmit = (user) => {
    if (user.user_id) {
      const updatedUsers = users.map((u) => {
        if (u.user_id === user.user_id) {
          return user;
        }

        return u;
      });

      setUsers(updatedUsers);
    } else {
      const newUsers = [...users, user];
      setUsers(newUsers);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {!users || users.length < 1 ? (
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
