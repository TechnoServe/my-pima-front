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
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "rgba(244, 103, 0, 0.5)",
    transition: "background-color 0.3s ease-in-out",
  },
}));

const FilterContent = ({
  open,
  handleClose,
  filter,
  setFilter,
  setFilteredGroups,
  setFilteredSessions,
  data,
}) => {
  const [activeTab, setActiveTab] = useState("");

  // get url
  const location = useLocation();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = () => {
    setFilteredGroups && setFilteredGroups([]);
    setFilteredSessions && setFilteredSessions([]);
    handleClose();

    if (filter.farmerTrainer) {
      setFilteredGroups(
        data.filter((group) => group.farmer_trainer === filter.farmerTrainer)
      );
      return;
    }

    if (filter.businessAdvisor) {
      setFilteredGroups(
        data.filter(
          (group) => group.business_advisor === filter.businessAdvisor
        )
      );
      return;
    }

    if (filter.moduleName) {
      setFilteredSessions(
        data.filter((session) => session.ts_module === filter.moduleName)
      );
      return;
    }

    if (filter.sessionDate) {
      setFilteredSessions(
        data.filter((session) => session.session_date === filter.sessionDate)
      );
      return;
    }
  };

  const handleReset = () => {
    setFilter({
      businessAdvisor: "",
      farmerTrainer: "",
      moduleName: "",
      sessionDate: "",
    });

    setFilteredGroups && setFilteredGroups([]);
    setFilteredSessions && setFilteredSessions([]);
  };

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
          <div>
            <span
              style={{ fontSize: "12px", color: "#2b2b2b", marginRight: "5px" }}
            >
              Selected filters :
            </span>
            {
              // display selected filters here, get non-empty values from filter object
              filter && filter.businessAdvisor && (
                <Chip
                  label={filter.businessAdvisor}
                  defaultValue={filter.businessAdvisor}
                  size="small"
                  onDelete={() => {
                    setFilter({
                      businessAdvisor: "",
                      farmerTrainer: "",
                      trainingGroup: "",
                    });
                  }}
                />
              )
            }
            {
              // display selected filters here, get non-empty values from filter object
              filter && filter.farmerTrainer && (
                <Chip
                  label={filter.farmerTrainer}
                  size="small"
                  onDelete={() => {
                    setFilter((prevState) => ({
                      ...prevState,
                      farmerTrainer: "",
                      trainingGroup: "",
                    }));
                  }}
                />
              )
            }

            {filter && filter.moduleName && (
              <Chip
                label={filter.moduleName}
                size="small"
                onDelete={() => {
                  setFilter((prevState) => ({
                    ...prevState,
                    moduleName: "",
                  }));
                }}
              />
            )}

            {filter && filter.sessionDate && (
              <Chip
                label={filter.sessionDate}
                size="small"
                onDelete={() => {
                  setFilter((prevState) => ({
                    ...prevState,
                    sessionDate: "",
                  }));
                }}
              />
            )}

            {
              // if no filter is selected, display this
              filter &&
                filter.businessAdvisor === "" &&
                filter.farmerTrainer === "" &&
                filter.moduleName === "" &&
                filter.sessionDate === "" && (
                  <em style={{ fontSize: "11px", color: "#969696" }}>
                    Nothing yet
                  </em>
                )
            }
          </div>{" "}
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
                {location.pathname === "/traingroup" ? (
                  <Chip
                    variant="outlined"
                    label="Business Advisor"
                    icon={<MdClass size={15} />}
                    color={
                      activeTab === "businessAdvisor" ? "primary" : "default"
                    }
                    onClick={() => handleTabChange("businessAdvisor")}
                  />
                ) : (
                  <>
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
                      label="Session Date"
                      icon={<MdCalendarToday size={15} />}
                      color={
                        activeTab === "sessionDate" ? "primary" : "default"
                      }
                      onClick={() => handleTabChange("sessionDate")}
                    />
                  </>
                )}
              </div>

              <div className="filter__content-container">
                {activeTab === "businessAdvisor" && (
                  <BAFilter
                    setFilter={setFilter}
                    setFilteredGroups={setFilteredGroups}
                    groups={data}
                  />
                )}
                {activeTab === "moduleName" && (
                  <MDFilter
                    setFilter={setFilter}
                    setFilteredSessions={setFilteredSessions}
                    data={data}
                  />
                )}
                {activeTab === "sessionDate" && (
                  <DateFilter
                    setFilter={setFilter}
                    setFilteredSessions={setFilteredSessions}
                    data={data}
                  />
                )}
                {activeTab === "status" && <StatusFilter />}
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleReset}
              startIcon={<AiOutlineReload />}
              sx={{ textTransform: "initial", color: "#087C8F" }}
            >
              Reset all
            </Button>
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
