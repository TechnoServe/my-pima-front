// UsersForm.js
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Select from "react-select";

const UsersForm = ({ onSubmit, selectedUser, onSelect }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data and call onSubmit function
    // to add or modify a user
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        {selectedUser ? "Edit User" : "Add User"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" variant="standard" fullWidth />
        <TextField label="Email" variant="standard" fullWidth />
        <TextField label="Mobile No." variant="standard" fullWidth />
        <Box sx={{ marginTop: "10px" }}>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            Select Role
          </Typography>
          <Select
            name="role"
            options={[
              { value: "admin", label: "Admin" },
              { value: "business_advisor", label: "Business Advisor" },
              { value: "farmer_trainer", label: "Farmer Trainer" },
            ]}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            Select Project
          </Typography>
          <Select
            name="project"
            options={[
              { value: "project1", label: "Project 1" },
              { value: "project2", label: "Project 2" },
              { value: "project3", label: "Project 3" },
            ]}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            marginTop: "20px",
          }}
        >
          {selectedUser ? "Modify" : "Save New"}
        </Button>
        {selectedUser && (
          <Button
            type="submit"
            variant="standard"
            color="secondary"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
            onClick={() => onSelect(null)}
          >
            Cancel
          </Button>
        )}
      </form>
    </Box>
  );
};

export default UsersForm;
