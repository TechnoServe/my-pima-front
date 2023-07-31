import React from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import Tgtabs from "./Tgtabs";
import { useParams } from "react-router-dom";

const Styles = {
  marginTop: "15px",
  fontWeight: "400",
  color: "rgba(125, 127, 136, 1)",
  fontSize: "12px",
  maxWidth: "80%",
};

const Tgdetail = ({ trainingGroups }) => {
  const breadCrumbs = "Training group";
  // get params from url
  const params = useParams();
  const { id } = params;

  const selectedTrainingGroup = trainingGroups.find(
    (group) => group.tg_id === id
  );
  const breadCrumbsLinkTo = "traingroup";

  return (
    <div>
      {selectedTrainingGroup && (
        <>
          <Breadcrumb
            name={selectedTrainingGroup.tg_name}
            q
            firstItem={breadCrumbs}
            linkTo={breadCrumbsLinkTo}
          />
          <div style={{ marginTop: "10px" }}>
            <h1>{selectedTrainingGroup.tg_name}</h1>
            <p style={Styles}>
              In the training group details you can access detailed information
              for a specific training group, explore the training sessions list
              associated with the selected group. Review the Farm Visits List
              associated with the group and export the information displayed on
              this page to Excel or CSV format.
            </p>
          </div>
          <Tgtabs details={selectedTrainingGroup} />
        </>
      )}
    </div>
  );
};

export default Tgdetail;
