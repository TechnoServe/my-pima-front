import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumbs";
import "./partsstyles.css";
import Partscontentview from "./Partscontentview";
import Partstableview from "./Partstableview";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_FARM_VISITS_PER_PART} from "../../../graphql/queries/farmVisitsRequests"; // Assuming this is the correct query
import {GET_PARTICIPANT_BY_ID} from "../../../graphql/queries/participantsRequests";
import LoadingScreen from "../../../components/LoadingScreen"; // Assuming you have a LoadingScreen component
import { Typography } from "@mui/material";

const Partdetail = () => {
  const breadCrumbs = "Participants";
  const breadCrumbsLinkTo = "participants";

  const [farmVisitsPerPart, setFarmVisitsPerPart] = useState([]);

  // Get params from URL
  const params = useParams();
  const { id } = params;

  // Query to get participant by ID
  const { loading: participantLoading, error: participantError, data: participantData } = useQuery(GET_PARTICIPANT_BY_ID, {
    variables: { id }, // Ensure that the variable matches the participant ID in the query
  });

  // Query for farm visits per participant
  const { loading: farmVisitsLoading, error: farmVisitsError, data: farmVisitsData } = useQuery(GET_FARM_VISITS_PER_PART, {
    variables: { partId: id },
    skip: !id, // Skip the query if id is not present
  });

  useEffect(() => {
    if (farmVisitsData) {
      const farmVisits = farmVisitsData.getFarmVisitsByParticipant.farmVisits;
      setFarmVisitsPerPart(farmVisits);
    }
  }, [farmVisitsData]);

  // Handle loading and errors
  if (participantLoading || farmVisitsLoading) {
    return <LoadingScreen />; // Show loading spinner
  }

  if (participantError || farmVisitsError) {
    return (
      <div className="error__container">
        <Typography color="error">
          {participantError?.message || farmVisitsError?.message}
        </Typography>
      </div>
    );
  }

  const selectedParticipant = participantData?.getParticipantsById?.participant;

  return (
    <>
      <Breadcrumb
        name="Details"
        firstItem={breadCrumbs}
        linkTo={breadCrumbsLinkTo}
      />
      <div className="parts__container">
        {selectedParticipant ? (
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
        )}
      </div>
    </>
  );
};

export default Partdetail;
