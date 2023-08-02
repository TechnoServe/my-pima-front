import React from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import "./partsstyles.css"
import Partscontentview from "./Partscontentview";
import Partstableview from "./Partstableview";

const Partdetail = () => {
  const breadCrumbs = "Participants";
  const breadCrumbsLinkTo = "participant";

  return (
    <>
    <Breadcrumb
            name= "Details"
            firstItem={breadCrumbs}
            linkTo={breadCrumbsLinkTo}
          />
          <div className="parts__container">
            <div className="parts__detailcontent">
<Partscontentview/>

            </div>
            <div className="parts__tablecontent">
<Partstableview/>

            </div>

          </div>
    </>
  );
};

export default Partdetail;
