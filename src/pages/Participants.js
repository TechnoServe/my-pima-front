import React from "react";
import Table from "../components/Table/Table";

const Participants = () => {

  const columns = [
    { Header: "No.", accessor: "num" },
    { Header: "Full Name", accessor: "part_name" },
    { Header: "Gender", accessor: "part_gender" },
    { Header: "District", accessor: "part_district" },
    { Header: "TNS Id", accessor: "tns_id" },
    { Header: "Status", accessor: "part_status" },
    { Header: "Farmer Trainer", accessor: "farmer_trainer" },
    { Header: "Business Advisor", accessor: "business_advisor" },

  ];
  const tableRowItem = "participant";

  const rows = [
    {
      num: "1",
      part_name: "Peace Ishimwe",
      part_gender: "Female",
      part_district: "Remera",
      tns_id: "TNS2345",
      part_status: "Pending",
      farmer_trainer: "Farmer Trainer",
      business_advisor: "Business Advisor",
    },
  ];

  return (
    <div>
      <h1 className="module__heading">Participants View</h1>
      <Table columns={columns} data={rows} tableRowItem={tableRowItem}
 />

    </div>
  );
};

export default Participants;
