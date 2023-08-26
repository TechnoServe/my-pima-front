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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import Select from "react-select";

const AssignModal = ({ open, handleClose, title, data }) => {
  const [toggleAdd, setToggleAdd] = React.useState(false);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle fontSize={"18px"}>
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
            {data && data.length > 0 ? (
              data.map((item, index) => (
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
              <em
                style={{
                  alignSelf: "center",
                }}
              >
                No users assigned to this project
              </em>
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
