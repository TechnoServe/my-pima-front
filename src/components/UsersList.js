// UsersList.js
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
} from "@mui/material";
import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";

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
    // vertical padding + font size from searchIcon
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

const UsersList = ({ users, onSelect }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;

    const filtered = users.filter(
      (item) =>
        item.username.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <>
      <Search onChange={handleSearch}>
        <SearchIconWrapper>
          <BiSearchAlt />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search user…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
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
                  {user.username}
                  <Chip
                    label={user.role}
                    color="secondary"
                    variant="outlined"
                    sx={{ marginLeft: "10px" }}
                  />
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle2">Email:</Typography>
                  <Typography variant="subtitle1">{user.email}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle2">Mobile No.:</Typography>
                  <Typography variant="subtitle1">{user.mobile}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle2">SF Id:</Typography>
                  <Typography variant="subtitle1">{user.sf_id}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle2">
                    Project Belongs To:
                  </Typography>
                  <Typography variant="subtitle1">{user.project}</Typography>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <BsPencilSquare
                    color="secondary"
                    style={{
                      cursor: "pointer",
                    }}
                    title="Edit User"
                    onClick={() => onSelect(user)}
                  />
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6" align="center">
            No user found
          </Typography>
        )}
      </div>
    </>
  );
};

export default UsersList;
