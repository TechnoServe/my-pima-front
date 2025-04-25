import React from "react";
import Table from "../../../components/Table/Table";

const FvTabTable = ({ details, farmVisits }) => {
  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "training_group",
      name: "FFG Name",
      selector: (row) => row.training_group,
      sortable: true,
    },
    {
      id: "tns_id",
      name: "TNS ID",
      selector: (row) => row.tns_id,
      sortable: true,
    },
    {
      id: "farm_visited",
      name: "Farm Visited",
      selector: (row) => row.farm_visited,
      sortable: true,
    },
    // {
    //   id: "household_id",
    //   name: "Household Id",
    //   selector: (row) => row.household_id,
    //   sortable: true,
    // },
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
      }))
    : [];

  return (
    <div>
      <Table
        columns={columns}
        data={rows}
        tableRowItem={tableRowItem}
        details={details}
      />
    </div>
  );
};

export default FvTabTable;
