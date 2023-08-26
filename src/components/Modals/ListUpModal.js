import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import Avatar from "react-avatar";

const ListUpModal = ({ open, handleClose, title, data }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <List>
          {data.map((item, index) => (
            <ListItem key={index} button>
              <ListItemAvatar>
                <Avatar
                  name={item}
                  size="40"
                  round={true}
                  color="#7B9D6F"
                  fgColor="#fff"
                />
              </ListItemAvatar>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListUpModal;
