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
                options={[]}
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
                options={[]}
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
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ marginTop: "10px" }}
                onClick={() => {
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
