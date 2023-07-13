import React from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import Tgtabs from "./Tgtabs";

const Tgdetail = () => {
  const Styles = {
    marginTop: "15px",
    fontWeight: "400",
    color: "rgba(125, 127, 136, 1)",
    fontSize: "12px",
    maxWidth: "80%",
  };
  return (
    <div>
      <Breadcrumb />
      <div style={{ marginTop: "10px" }}>
        <h1>TG Tegbar Masaya Group</h1>
        <p style={Styles}>
          In the training group details you can access detailed information for
          a specific training group, explore the training sessions list
          associated with the selected group. Review the Farm Visits List
          associated with the group and export the information displayed on this
          page to Excel or CSV format.
        </p>
      </div>
      <Tgtabs />
    </div>
  );
};

export default Tgdetail;
