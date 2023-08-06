import React from "react";
import Table from "../../../components/Table/Table";

const Attendtable = () => {
  const columns = [
    { Header: "No.", accessor: "num" },
    { Header: "Session Name", accessor: "ah_name" },
    { Header: "Module Name", accessor: "ah_module" },
    { Header: "Training Group", accessor: "ah_group" },
    { Header: "Status", accessor: "ah_status" },
    { Header: "Farmer Trainer", accessor: "farmer_trainer" },
    { Header: "Buisness Advisor", accessor: "buisness_advisor" },
    { Header: "Date", accessor: "date" },
  ];
  const tableRowItem = "participant";

  const rows = [
    {
      num: "1",
      ah_name: "Green Group Cocoa",
      ah_module: "TNS Bumbogo",
      ah_group: "MAY 2O",
      ah_status: "Attended Session",
      farmer_trainer: "Farmer Trainer",
      business_advisor: "Business Advisor",
      date: "8/3/2021",
    },
    {
      num: "1",
      ah_name: "Blue Farme Cocoa",
      ah_module: "TNS Bumbogo",
      ah_group: "TNG56",
      ah_status: "Missed Session",
      farmer_trainer: "Farmer Trainer",
      business_advisor: "Business Advisor",
      date: "8/3/2021",
    },
  ];

  return (
    <>
      <Table columns={columns} data={rows} />
    </>
  );
};

export default Attendtable;
