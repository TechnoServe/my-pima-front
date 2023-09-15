import React from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import "./partsstyles.css";
import Partscontentview from "./Partscontentview";
import Partstableview from "./Partstableview";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_FARM_VISITS_PER_PART } from "../../graphql/queries/farmVisitsRequests";
import { useEffect } from "react";

const Partdetail = ({ participants }) => {
  const breadCrumbs = "Participants";
  const breadCrumbsLinkTo = "participants";

  const [farmVisitsPerPart, setFarmVisitsPerPart] = useState([]); // eslint-disable-line no-unused-vars

  // get params from url
  const params = useParams();
  const { id } = params;

  const getAllFarmVisitsByPart = useQuery(GET_FARM_VISITS_PER_PART, {
    variables: { partId: id },
  });

  const selectedParticipant =
    participants && participants.find((participant) => participant.p_id === id);

  useEffect(() => {
    if (getAllFarmVisitsByPart.data) {
      const farmVisits =
        getAllFarmVisitsByPart.data.getFarmVisitsByParticipant.farmVisits;
      setFarmVisitsPerPart(farmVisits);
    }
  }, [getAllFarmVisitsByPart.data]);

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
                  participant={selectedParticipant}
                  farmVisitsPerPart={farmVisitsPerPart}
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
