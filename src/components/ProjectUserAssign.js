import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  InputBase,
  Typography,
  alpha,
  styled,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ProjectUserAssign = ({
  users,
  projects,
  onSelect,
  onUpdateUserProjects,
}) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [userProjects, setUserProjects] = useState([]);

  // Filter active users
  useEffect(() => {
    const activeUsers = users.filter(
      (user) => user.account_status === "active"
    );
    setFilteredUsers(activeUsers);
  }, [users]);

  const handleSearch = (e) => {
    const value = e.target.value;
    const filtered = users.filter(
      (item) =>
        item.user_name.toLowerCase().includes(value.toLowerCase()) ||
        (item.user_email &&
          item.user_email.toLowerCase().includes(value.toLowerCase())) ||
        (item.mobile_no &&
          item.mobile_no.toLowerCase().includes(value.toLowerCase())) ||
        (item.sf_user_id &&
          item.sf_user_id.toLowerCase().includes(value.toLowerCase())) ||
        (item.role.role_name &&
          item.role.role_name.toLowerCase().includes(value.toLowerCase()))
    );
    setFilteredUsers(filtered);
  };

  const handleViewProjects = (user) => {
    setSelectedUser(user);
    setUserProjects(user.assigned_projects || []);
    setOpen(true);
  };

  const handleProjectToggle = (projectId) => {
    const updatedProjects = userProjects.includes(projectId)
      ? userProjects.filter((id) => id !== projectId)
      : [...userProjects, projectId];
    setUserProjects(updatedProjects);
  };

  const handleSaveProjects = () => {
    if (onUpdateUserProjects) {
      onUpdateUserProjects(selectedUser.id, userProjects);
    }
    setOpen(false);
    setSelectedUser(null);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      {/* Search Input */}
      <Search onChange={handleSearch}>
        <SearchIconWrapper>
          <BiSearchAlt />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search user…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      {/* List of Users */}
      <div
        style={{
          height: "calc(100vh - 200px)",
          overflowY: "scroll",
          marginTop: "20px",
        }}
      >
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <Card key={user.id} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">
                  {user.user_name}
                  <Chip
                    label={user.role.role_name}
                    color="secondary"
                    variant="outlined"
                    sx={{ marginLeft: "10px" }}
                  />
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="subtitle2">Email:</Typography>
                  <Typography variant="subtitle1">
                    {user.user_email || "N/A"}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="subtitle2">Mobile No.:</Typography>
                  <Typography variant="subtitle1">
                    {user.mobile_no || "N/A"}
                  </Typography>
                </Box>

                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleViewProjects(user)}
                  >
                    View Projects
                  </Button>
                  <BsPencilSquare
                    color="secondary"
                    style={{ cursor: "pointer" }}
                    onClick={() => onSelect(user)}
                  />
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="em" align="center">
            Please wait while we fetch users...
          </Typography>
        )}
      </div>

      {/* Project Assignment Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Manage Projects for {selectedUser?.user_name}</DialogTitle>
        <DialogContent>
          <List>
            {projects.map((project) => (
              <ListItem
                key={project.id}
                button
                onClick={() => handleProjectToggle(project.id)}
              >
                <ListItemText primary={project.project_name} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    onChange={() => handleProjectToggle(project.id)}
                    checked={userProjects.includes(project.id)}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveProjects} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectUserAssign;
