import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Breadcrumb from "../../components/Breadcrumbs";
import Tgtabs from "./Tgtabs";
import { GET_FARM_VISITS_PER_TG } from "../../graphql/queries/farmVisitsRequests";
import { GET_PARTICIPANTS_PER_TG } from "../../graphql/queries/participantsRequests";
import LoadingScreen from "../../components/LoadingScreen";
import { Typography } from "@mui/material";

const Styles = {
  marginTop: "15px",
  fontWeight: "400",
  color: "rgba(125, 127, 136, 1)",
  fontSize: "12px",
  maxWidth: "80%",
};

const Tgdetail = ({ trainingGroups, trainingSessions }) => {
  const breadCrumbs = "Training group";

  const [farmVisitsPerGroup, setFarmVisitsPerGroup] = useState([]);
  const [participantsPerGroup, setParticipantsPerGroup] = useState([]);

  // Get params from URL
  const params = useParams();
  const { id } = params;

  // Ensure `id` is present before making the query
  const shouldSkipQuery = !id;

  // Query for farm visits
  const getAllFarmVisitsByTG = useQuery(GET_FARM_VISITS_PER_TG, {
    variables: { tgId: id },
    skip: shouldSkipQuery, // Skip query if id is not present
  });

  // Query for participants
  const { loading, error, data } = useQuery(GET_PARTICIPANTS_PER_TG, {
    variables: { tgId: id },
    skip: shouldSkipQuery, // Skip query if id is not present
  });

  const selectedTrainingGroup = trainingGroups.find(
    (group) => group.tg_id === id
  );

  const breadCrumbsLinkTo = "traingroup";

  // Update farm visits data
  useEffect(() => {
    if (getAllFarmVisitsByTG.data) {
      const farmVisits =
        getAllFarmVisitsByTG.data.getFarmVisitsByGroup.farmVisits;
      setFarmVisitsPerGroup(farmVisits);
    }
  }, [getAllFarmVisitsByTG.data]);

  // Update participants data
  useEffect(() => {
    if (data && data.getParticipantsByGroup.participants) {
      setParticipantsPerGroup(data.getParticipantsByGroup.participants);
    }
  }, [data]);

  if (loading) {
    return <LoadingScreen />; // Display loading spinner
  }

  if (error)
    return (
      <div className="circular_progress">
        <Typography color="error">Error loading data</Typography>
      </div>
    );

  return (
    <div>
      {selectedTrainingGroup && (
        <>
          <Breadcrumb
            name={selectedTrainingGroup.tg_name}
            firstItem={breadCrumbs}
            linkTo={breadCrumbsLinkTo}
          />
          <div style={{ marginTop: "10px" }}>
            <h1>{selectedTrainingGroup.tg_name}</h1>
            <p style={Styles}>
              In the focal farmer group details you can access detailed information
              for a specific ffg, explore the training sessions list associated
              with the selected group. Review the Farm Visits List associated with
              the ffg and export the information displayed on this page to Excel or
              CSV format.
            </p>
          </div>
          <Tgtabs
            details={selectedTrainingGroup}
            trainingSessions={
              trainingSessions &&
              trainingSessions.length > 0 &&
              trainingSessions.filter(
                (session) => session.ts_group === selectedTrainingGroup.tg_name
              )
            }
            farmVisits={farmVisitsPerGroup}
            participants={participantsPerGroup}
          />
        </>
      )}
    </div>
  );
};

export default Tgdetail;
