import React from "react";
import ProjectListDropdown from "../components/ProjectDrop/ProjectListDropdown";
import DataTable from "../components/Table/DataTable";

const TrainingGroup = () => {
  const columns = ["Training Group Name", "TNS ID", "No of Participants", "Buisness Advisor",  "Farmer Trainer"];
  function createData(...rowData) {
    return rowData;
  }
  
  const rows = [
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    createData('TNS Bumbogo', "TNS234111", 10, "John Smith", "John Doe"),
    
  ];

  return (
    <main className="page__container">
      <ProjectListDropdown />
      <div className="page__content">
        <DataTable columns={columns} rows={rows}/>
      </div>
    </main>
  );
};

export default TrainingGroup;
