import React from "react";
import Table from "../components/Table/Table";
import { Chip } from "@mui/material";

const FarmVisit = ({ farmVisits }) => {
  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "training_group",
      name: "TG Name",
      selector: (row) => row.training_group,
      sortable: true,
    },
    {
      id: "tns_id",
      name: "TNS Farmer ID",
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
      id: "farmer_trainer",
      name: "Farmer Trainer",
      selector: (row) => row.farmer_trainer,
      sortable: true,
    },
    {
      id: "date_visited",
      name: "Date Visited",
      selector: (row) => row.date_visited,
      sortable: true,
    },
    {
      id: "pima_household_id",
      name: "PIMA HH Id",
      selector: (row) => row.pima_household_id,
      sortable: true,
    },
    {
      id: "pima_farmer_id",
      name: "PIMA Farmer ID",
      selector: (row) => row.pima_farmer_id,
      sortable: true,
    },
  ];
  const tableRowItem = "farmvisit";

  const rows = farmVisits
    ? farmVisits.map((fv, index) => ({
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
        pima_household_id: fv.pima_household_id,
        pima_farmer_id: fv.pima_farmer_id,
      }))
    : [];

  return (
    <div>
      <h1 className="module__heading">Farm Visits View</h1>
      {farmVisits.length > 0 ? (
        <Table columns={columns} data={rows} tableRowItem={tableRowItem} />
      ) : (
        <div className="no__data">
          <h1 style={{ fontSize: "20px" }}>No Farm Visit Yet</h1>
        </div>
      )}
    </div>
  );
};

export default FarmVisit;
