import {
  Chip,
  Dialog,
  Button,
  DialogContent,
  Divider,
  IconButton,
  DialogActions,
} from "@mui/material";
import {
  MdClose,
  MdClass,
  MdPending,
  MdLibraryBooks,
  MdCalendarToday,
} from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import BAFilter from "./Filteroptions/BAFillter";
import MDFilter from "./Filteroptions/MDFilter";
import DateFilter from "./Filteroptions/DateFilter";
import StatusFilter from "./Filteroptions/StatusFilter";
import "./Filter.css";
import { useState } from "react";
import { styled} from "@mui/material/styles";


const StyledButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "rgba(244, 103, 0, 0.5)",
    transition: "background-color 0.3s ease-in-out",
  },
}));




const FilterContent = ({ open, handleClose }) => {
  const [activeTab, setActiveTab] = useState("businessAdvisor");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDelete = () => {};
  const handleSearch = () => {};
  const handleReset = () => {};


  return (
    <div style={{ maxheight: "100%" }}>
      <Dialog
        open={open}
        keepMounted
        fullWidth
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{ margin: "20px" }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#2b2b2b",
            }}
          >
            <MdClose />
          </IconButton>
          <p>
            <Chip
              label="filter selection"
              size="small"
              onDelete={handleDelete}
            />
          </p>{" "}
          <Divider sx={{ marginBottom: "0", marginTop: "10px" }} />
          <DialogContent sx={{ paddingLeft: "10px" }}>
            <div className="filter__content">
              <p
                style={{
                  fontSize: "12px",
                  color: "#2b2b2b",
                  paddingBottom: "10px",
                }}
              >
                Filter by :
              </p>

              <div
                className="filter__options"
                style={{ display: "flex", gap: "20px" }}
              >
                <Chip
                  variant="outlined"
                  label="Buisness Advisor"
                  icon={<MdClass size={15} />}
                  color={
                    activeTab === "businessAdvisor" ? "primary" : "default"
                  }
                  onClick={() => handleTabChange("businessAdvisor")}
                />
                <Chip
                  variant="outlined"
                  label="Module Name"
                  icon={<MdLibraryBooks size={15} />}
                  color={activeTab === "moduleName" ? "primary" : "default"}
                  onClick={() => handleTabChange("moduleName")}
                />
                <Chip
                  variant="outlined"
                  label="Status"
                  icon={<MdPending size={15} />}
                  color={activeTab === "status" ? "primary" : "default"}
                  onClick={() => handleTabChange("status")}
                />
                <Chip
                  variant="outlined"
                  label="Date"
                  icon={<MdCalendarToday size={15} />}
                  color={activeTab === "date" ? "primary" : "default"}
                  onClick={() => handleTabChange("date")}
                />
              </div>

              <div className="filter__content-container">
                {activeTab === "businessAdvisor" && <BAFilter />}
                {activeTab === "moduleName" && <MDFilter />}
                {activeTab === "date" && <DateFilter />}
                {activeTab === "status" && <StatusFilter />}
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onclick= {handleReset} startIcon= <AiOutlineReload/> sx={{ textTransform: "initial",color:"#087C8F" }}>Reset all</Button>
            <StyledButton
              autoFocus
              onClick={handleSearch}
              sx={{
                backgroundColor: "#F46700",
                textTransform: "initial",
                color: "#fff",
              }}
            >
              Search
            </StyledButton>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default FilterContent;
