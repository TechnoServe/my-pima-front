import React from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import "./partsstyles.css";
import Partscontentview from "./Partscontentview";
import Partstableview from "./Partstableview";
import { useParams } from "react-router-dom";

const Partdetail = ({ participants, trainingSessions }) => {
  const breadCrumbs = "Participants";
  const breadCrumbsLinkTo = "participants";

  // get params from url
  const params = useParams();
  const { id } = params;

  const selectedParticipant =
    participants && participants.find((participant) => participant.p_id === id);

  return (
    <>
      <Breadcrumb
        name="Details"
        firstItem={breadCrumbs}
        linkTo={breadCrumbsLinkTo}
      />
      <div className="parts__container">
        {
          // check if selectedParticipant is not null
          selectedParticipant ? (
            <>
              <div className="parts__detailcontent">
                <Partscontentview participant={selectedParticipant} />
              </div>
              <div className="parts__tablecontent">
                <Partstableview
                  trainingSessions={trainingSessions}
                  participant={selectedParticipant}
                />
              </div>
            </>
          ) : (
            <div className="no__data">
              <h1 style={{ fontSize: "20px" }}>No Participant Selected</h1>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Partdetail;
