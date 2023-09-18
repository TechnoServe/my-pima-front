import React from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import Tgtabs from "./Tgtabs";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_FARM_VISITS_PER_TG } from "../../graphql/queries/farmVisitsRequests";
import { useState } from "react";
import { useEffect } from "react";

const Styles = {
  marginTop: "15px",
  fontWeight: "400",
  color: "rgba(125, 127, 136, 1)",
  fontSize: "12px",
  maxWidth: "80%",
};

const Tgdetail = ({ trainingGroups, trainingSessions, participants }) => {
  const breadCrumbs = "Training group";

  const [farmVisitsPerGroup, setFarmVisitsPerGroup] = useState([]); // eslint-disable-line no-unused-vars

  // get params from url
  const params = useParams();
  const { id } = params;
  const getAllFarmVisitsByTG = useQuery(GET_FARM_VISITS_PER_TG, {
    variables: { tgId: id },
  });

  const selectedTrainingGroup = trainingGroups.find(
    (group) => group.tg_id === id
  );
  const breadCrumbsLinkTo = "traingroup";

  useEffect(() => {
    if (getAllFarmVisitsByTG.data) {
      const farmVisits =
        getAllFarmVisitsByTG.data.getFarmVisitsByGroup.farmVisits;
      setFarmVisitsPerGroup(farmVisits);
    }
  }, [getAllFarmVisitsByTG.data]);

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
            participants={
              participants.length > 0 &&
              participants.filter(
                (participant) =>
                  participant.training_group === selectedTrainingGroup.tg_id
              )
            }
          />
        </>
      )}
    </div>
  );
};

export default Tgdetail;
