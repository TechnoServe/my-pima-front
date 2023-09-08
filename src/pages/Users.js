import { Grid } from "@mui/material";
import React, { useState } from "react";
import UsersList from "../components/UsersList";
import UsersForm from "../components/UsersForm";

const Users = () => {
  const [users, setUsers] = useState([
    {
      username: "user1",
      role: "admin",
      project: "project1",
      email: "johndoe@tns.com",
      mobile: "1234567890",
      sf_id: "a0njk24",
    },
    {
      username: "user2",
      role: "business_advisor",
      project: "project2",
      email: "janedoe@tns.org",
      mobile: "0987654321",
      sf_id: "a0njk25",
    },
    {
      username: "user3",
      role: "farmer_trainer",
      project: "project3",
      email: "mamadoe@tns.org",
      mobile: "0987654321",
      sf_id: "a0njk26",
    },
  ]);
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
        <UsersList users={users} onSelect={handleUserSelect} />
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
