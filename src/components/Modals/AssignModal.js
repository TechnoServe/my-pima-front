import React from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BiSearchAlt, BiSolidPencil } from "react-icons/bi";
import Select from "react-select";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import {
  GET_ALL_USERS,
  UPDATE_USER,
} from "../../graphql/queries/usersRequests";
import { GET_ALL_ROLES } from "../../graphql/queries/rolesRequests";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

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

const AssignModal = ({ open, handleClose, title, data }) => {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isBeingUpdated, setIsBeingUpdated] = useState(false);
  const getAllUsers = useQuery(GET_ALL_USERS);
  const getAllRoles = useQuery(GET_ALL_ROLES);

  const [updateUser] = useMutation(UPDATE_USER);

  const handleSearch = (e) => {
    const value = e.target.value;

    const filtered = data.filter(
      (item) =>
        item.tbl_user.user_name.toLowerCase().includes(value.toLowerCase()) ||
        item.tbl_role.role_name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (getAllUsers.data) {
      setUsers(getAllUsers.data.getUsers.users);
    }
  }, [getAllUsers.data]);

  useEffect(() => {
    if (getAllRoles.data) {
      setRoles(getAllRoles.data.getRoles.roles);
    }
  }, [getAllRoles.data]);

  const handleUpdateUser = async () => {
    if (selectedUser && selectedRole) {
      setIsBeingUpdated(true);
      const { data } = await updateUser({
        variables: {
          userId: selectedUser,
          roleId: selectedRole,
        },
      });

      if (data.updateUser.status === 200) {
        toast.success(data.updateUser.message);
        setSelectedUser(null);
        setSelectedRole(null);
        setIsBeingUpdated(false);
        setToggleAdd(false);
      } else {
        setIsBeingUpdated(false);
        toast.error(data.updateUser.message);
      }
    } else {
      toast.error("Please select user and role");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle fontSize={"18px"}>
        <Chip
          label={data.length}
          style={{
            color: "#333",
          }}
          variant="contained"
        />{" "}
        Users Assigned to{" "}
        <Chip label={title} color="primary" variant="contained" />
        <Divider />
      </DialogTitle>
      <DialogContent>
        {toggleAdd ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ width: "100%" }}>
              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                Select User
              </Typography>
              <Select
                name="user"
                options={
                  users.length > 0
                    ? users.map((item) => ({
                        value: item.user_id,
                        label: item.user_name,
                      }))
                    : []
                }
                onChange={(e) => {
                  setSelectedUser(e.value);
                }}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </FormControl>
            <FormControl sx={{ width: "100%", marginTop: "10px" }}>
              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                Select Role
              </Typography>
              <Select
                name="role"
                options={
                  roles.length > 0
                    ? roles.map((item) => ({
                        value: item.role_id,
                        label: item.role_name,
                      }))
                    : []
                }
                onChange={(e) => {
                  setSelectedRole(e.value);
                }}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "10px", marginRight: "10px" }}
                onClick={handleUpdateUser}
                disabled={isBeingUpdated}
              >
                {isBeingUpdated ? (
                  <BeatLoader color={"#fff"} loading={true} size={10} />
                ) : (
                  "Save"
                )}
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ marginTop: "10px" }}
                onClick={() => {
                  setSelectedUser(null);
                  setSelectedRole(null);
                  setToggleAdd(false);
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        ) : (
          <List>
            {/* add search field */}
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px 0",
              }}
            >
              <Search onChange={handleSearch}>
                <SearchIconWrapper>
                  <BiSearchAlt />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search any…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </ListItem>

            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "5px 0",
                  }}
                >
                  <ListItemText primary={item.tbl_user.user_name} />
                  <Chip
                    label={item.tbl_role.role_name}
                    color="secondary"
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: "10px" }}
                  />
                  <ListItemIcon
                    children={<BiSolidPencil size={20} color={"gray"} />}
                  />
                  <ListItemIcon
                    children={<AiOutlineMinusCircle size={20} color={"red"} />}
                  />
                </ListItem>
              ))
            ) : (
              <Typography
                style={{
                  alignSelf: "center",
                }}
              >
                No users assigned to this project
              </Typography>
            )}
          </List>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setToggleAdd(true);
          }}
          color="primary"
          disabled={toggleAdd}
        >
          Add New
        </Button>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignModal;
