import { useState } from "react";
import { MenuItem, Select } from "@mui/material";

const BAFilter = ({ setFilter, groups }) => {
  const [selectedBusinessAdvisor, setSelectedBusinessAdvisor] = useState("");
  const [selectedFarmerTrainer, setSelectedFarmerTrainer] = useState("");
  const [selectedTrainingGroup, setSelectedTrainingGroup] = useState("");

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <div>
        <h5>Business Advisor</h5>
        <Select
          value={selectedBusinessAdvisor}
          onChange={(event) => {
            setSelectedBusinessAdvisor(event.target.value);
            setSelectedFarmerTrainer("");
            setSelectedTrainingGroup("");
            setFilter({
              businessAdvisor: event.target.value,
              farmerTrainer: "",
              trainingGroup: "",
            });
          }}
          sx={{
            borderRadius: "5px",
            marginLeft: "10px",
            maxHeight: "50px",
            boxShadow: "0 4px 14px 0px rgba(0, 0, 0, 0.2)",
          }}
          displayEmpty
        >
          <MenuItem value="" selected disabled>
            Select BA
          </MenuItem>
          {[...new Set(groups.map((group) => group.business_advisor))].map(
            (businessAdvisor) => (
              <MenuItem key={businessAdvisor} value={businessAdvisor}>
                {businessAdvisor}
              </MenuItem>
            )
          )}
        </Select>
      </div>

      <div>
        <h5>Farmer Trainer</h5>
        <Select
          value={selectedFarmerTrainer}
          onChange={(event) => {
            setSelectedFarmerTrainer(event.target.value);
            setSelectedTrainingGroup("");
            setFilter({
              businessAdvisor: selectedBusinessAdvisor,
              farmerTrainer: event.target.value,
              trainingGroup: "",
            });
          }}
          sx={{
            borderRadius: "5px",
            marginLeft: "10px",
            maxHeight: "50px",
            boxShadow: "0 4px 14px 0px rgba(0, 0, 0, 0.2)",
          }}
          displayEmpty
        >
          <MenuItem value="" disabled selected>
            Select FT
          </MenuItem>
          {[
            ...new Set(
              groups
                .filter(
                  (group) => group.business_advisor === selectedBusinessAdvisor
                )
                .map((group) => group.farmer_trainer)
            ),
          ].map((farmerTrainer) => (
            <MenuItem key={farmerTrainer} value={farmerTrainer}>
              {farmerTrainer}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div>
        <h5>Training Group</h5>
        <Select
          value={selectedTrainingGroup}
          onChange={(event) => {
            setSelectedTrainingGroup(event.target.value);
            setFilter({
              businessAdvisor: selectedBusinessAdvisor,
              farmerTrainer: selectedFarmerTrainer,
              trainingGroup: event.target.value,
            });
          }}
          sx={{
            borderRadius: "5px",
            marginLeft: "10px",
            maxHeight: "50px",
            boxShadow: "0 4px 14px 0px rgba(0, 0, 0, 0.2)",
          }}
          displayEmpty
        >
          <MenuItem value="" selected disabled>
            Select TG
          </MenuItem>
          {[
            ...new Set(
              groups
                .filter(
                  (group) =>
                    group.business_advisor === selectedBusinessAdvisor &&
                    group.farmer_trainer === selectedFarmerTrainer
                )
                .map((group) => group.tg_name)
            ),
          ].map((trainingGroup) => (
            <MenuItem key={trainingGroup} value={trainingGroup}>
              {trainingGroup}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default BAFilter;
