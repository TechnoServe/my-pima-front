import React from "react";
import Table from "../../components/Table/Table";

const Tgtabtable = () => {
  const columns = [
    { Header: "Session Name", accessor: "num" },
    { Header: "Module Name", accessor: "mod_name" },
    { Header: "Training Group", accessor: "tg_name" },
    { Header: "TNS ID", accessor: "tns_id" },
    { Header: "Status", accessor: "status" },
    { Header: "MA", accessor: "ma_name" },
    { Header: "FA", accessor: "fa_name" },
    { Header: "Buisness Advisor", accessor: "ba_name" },
    { Header: "Farmer Trainer", accessor: "ft_name" },
  ];
  const rows = [
    {
      num: "1",
      mod_name: "Module Name",
      tg_name: "Training Group",
      tns_id: "TNS2345",
      status: "Pending",
      ma_name: "Male Attendance",
      fa_name: "Female Attendance",
      ba_name: "Business Advisor",
      ft_name: "Farmer Trainer",
    },
  ];
  
  // Rest of the code remains the same
  

  return (
    <div>
      <Table columns={columns} data={rows} />
    </div>
  );
};

export default Tgtabtable;
