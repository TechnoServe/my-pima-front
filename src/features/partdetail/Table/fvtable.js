import React from "react";
import { Chip } from "@mui/material";
import Table from "../../../components/Table/Table";

const FvTabTable = ({ farmVisitsPerPart }) => {
  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "fv_name",
      name: "Farm Visit Name",
      selector: (row) => row.fv_name,
      sortable: true,
    },
    {
      id: "training_group",
      name: "Training Group",
      selector: (row) => row.training_group,
      sortable: true,
    },
    {
      id: "training_session",
      name: "Training Session",
      selector: (row) => row.training_session,
      sortable: true,
    },
    {
      id: "tns_id",
      name: "TNS Id",
      selector: (row) => row.tns_id,
      sortable: true,
    },
    {
      id: "farm_visited",
      name: "Farm Visited",
      selector: (row) => row.farm_visited,
      sortable: true,
    },
    {
      id: "household_id",
      name: "Household Id",
      selector: (row) => row.household_id,
      sortable: true,
    },
    {
      id: "farmer_trainer",
      name: "Farmer Trainer",
      selector: (row) => row.farmer_trainer,
      sortable: true,
    },
    {
      id: "has_training",
      name: "Has Training",
      selector: (row) => (
        <div>
          {row.has_training === "Yes" ? (
            <Chip label="Yes" color="success" />
          ) : (
            <Chip label="No" color="error" />
          )}
        </div>
      ),
      sortable: true,
    },
    {
      id: "date_visited",
      name: "Date Visited",
      selector: (row) => row.date_visited,
      sortable: true,
    },
  ];

  const tableRowItem = "farmvisit";

  const rows = farmVisitsPerPart
    ? farmVisitsPerPart.map((fv, index) => ({
      num: index + 1,
      fv_id: fv.fv_id,
      fv_name: fv.fv_name,
      training_group: fv.training_group,
      training_session: fv.training_session,
      tns_id: fv.tns_id,
      farm_visited: fv.farm_visited,
      household_id: fv.household_id,
      farmer_trainer: fv.farmer_trainer,
      has_training: fv.has_training,
      date_visited: fv.date_visited,
      }))
    : [];

  return (
    <div>
      <Table columns={columns} data={rows} tableRowItem={tableRowItem} />
    </div>
  );
};

export default FvTabTable;
