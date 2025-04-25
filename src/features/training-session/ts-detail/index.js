import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumbs";
import Tstabs from "./Tstabs";
// import { useQuery } from "@apollo/client";
// import { GET_FARM_VISITS_PER_TS } from "../../graphql/queries/farmVisitsRequests";

const Styles = {
  marginTop: "15px",
  fontWeight: "400",
  color: "rgba(125, 127, 136, 1)",
  fontSize: "12px",
  maxWidth: "80%",
};
const Tsdetail = () => {
  const { activeProject, trainingSessions } = useOutletContext();
  const breadCrumbs = "Training session";

  // const [farmVisitsPerSession, setFarmVisitsPerSession] = useState([]);

  // get params from url
  const params = useParams();
  const { id } = params;

  // const getAllFarmVisitsByTS = useQuery(GET_FARM_VISITS_PER_TS, {
  //   variables: { tsId: id },
  // });

  const selectedTrainingSession =
    trainingSessions && trainingSessions.find((group) => group.ts_id === id);
  const breadCrumbsLinkTo = "trainsession";

  // useEffect(() => {
  //   if (getAllFarmVisitsByTS.data) {
  //     const farmVisits =
  //       getAllFarmVisitsByTS.data.getFarmVisitsBySession.farmVisits;
  //     setFarmVisitsPerSession(farmVisits);
  //   }
  // }, [getAllFarmVisitsByTS.data]);

  return (
    <div>
      {selectedTrainingSession && (
        <>
          <Breadcrumb
            name={selectedTrainingSession.ts_name}
            firstItem={breadCrumbs}
            linkTo={breadCrumbsLinkTo}
          />

          <div style={{ marginTop: "10px" }}>
            <h1>{selectedTrainingSession.ts_name}</h1>
            <p style={Styles}>
              In the training session details you can access detailed
              information for a specific training session, training session
              image and other information
            </p>
          </div>

          <Tstabs
            details={selectedTrainingSession}
            //farmVisits={farmVisitsPerSession}
            selectedProject={activeProject}
          />
        </>
      )}
    </div>
  );
};

export default Tsdetail;
