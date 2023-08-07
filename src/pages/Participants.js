import React from "react";
import Table from "../components/Table/Table";

const Participants = ({ participants }) => {
  const columns = [
    { Header: "No.", accessor: "num" },
    { Header: "Full Name", accessor: "full_name" },
    { Header: "Gender", accessor: "gender" },
    { Header: "Location", accessor: "location" },
    { Header: "TNS Id", accessor: "tns_id" },
    { Header: "Training Group", accessor: "training_group" },
    { Header: "Status", accessor: "status" },
    { Header: "Farmer Trainer", accessor: "farmer_trainer" },
    { Header: "Business Advisor", accessor: "business_advisor" },
  ];
  const tableRowItem = "participants";

  const rows = participants
    ? participants.map((participant, index) => ({
        num: index + 1,
        p_id: participant.p_id,
        full_name: participant.full_name,
        gender: participant.gender,
        location: participant.location,
        tns_id: participant.tns_id,
        training_group: participant.training_group,
        status: participant.status,
        farmer_trainer: participant.farmer_trainer,
        business_advisor: participant.business_advisor,
      }))
    : [];

  return (
    <div>
      <h1 className="module__heading">Participants View</h1>
      {participants.length > 0 ? (
        <Table columns={columns} data={rows} tableRowItem={tableRowItem} />
      ) : (
        <div className="no__data">
          <h1 style={{ fontSize: "20px" }}>No Participants Yet</h1>
        </div>
      )}
    </div>
  );
};

export default Participants;
