import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumbs";
import Tstabs from "./Tstabs";

const Styles = {
  marginTop: "15px",
  fontWeight: "400",
  color: "rgba(125, 127, 136, 1)",
  fontSize: "12px",
  maxWidth: "80%",
};
const Tsdetail = ({ trainingSessions }) => {
  const breadCrumbs = "Training session";

  // get params from url
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <>
        <Breadcrumb name="First Item" firstItem={breadCrumbs} />
        <div style={{ marginTop: "10px" }}>
          <h1>Project Name</h1>
          <p style={Styles}>
            In the training session details you can access detailed information
            for a specific training session, training session image and other
            information
          </p>
        </div>
        <Tstabs />
      </>
    </div>
  );
};

export default Tsdetail;
