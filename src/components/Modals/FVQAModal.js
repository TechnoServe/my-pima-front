import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { GET_FARM_VISIT_QAs } from "../../graphql/queries/farmVisitsRequests";
import { BeatLoader } from "react-spinners";
import { BsFillCaretDownFill } from "react-icons/bs";

const FVQAModal = ({ open, handleClose, fvId }) => {
  const [approvedImages, setApprovedImages] = useState([]);
  const [rejectedImages, setRejectedImages] = useState([]);

  const getFarmVisitQAs = useQuery(GET_FARM_VISIT_QAs, {
    variables: { fvId: fvId },
  });

  const handleApproveImage = (imageURL) => {
    setApprovedImages((prevImages) => [...prevImages, imageURL]);
  };

  const handleRejectImage = (imageURL) => {
    setRejectedImages((prevImages) => [...prevImages, imageURL]);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogContent>
        <h3>Questions and Answers</h3>
        {getFarmVisitQAs.loading ? (
          <BeatLoader
            color="#087C8F"
            size={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
          />
        ) : getFarmVisitQAs.data?.getFVQAsByFarmVisits.status === 200 ? (
          getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs.questions.map(
            (item, index) => (
              <Accordion
                style={{
                  marginBottom: "1rem",
                }}
              >
                <AccordionSummary
                  expandIcon={<BsFillCaretDownFill />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {`(${index + 1}) ${item}`}
                    {getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs.answers[
                      index
                    ] &&
                      /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(
                        getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs.answers[
                          index
                        ]
                      ) && (
                        <Chip
                          label="Image"
                          variant="outlined"
                          size="10"
                          color="secondary"
                          style={{
                            marginLeft: "1rem",
                          }}
                        />
                      )}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {!getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs.answers[
                    index
                  ] ? (
                    "N/A"
                  ) : /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(
                      getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs.answers[
                        index
                      ]
                    ) ? (
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={`data:image/png;base64,${getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs.answers[index]}`}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          marginTop: "1rem",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() =>
                            handleApproveImage(
                              getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs
                                .answers[index]
                            )
                          }
                        >
                          <AiOutlineCheck />
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() =>
                            handleRejectImage(
                              getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs
                                .answers[index]
                            )
                          }
                        >
                          <AiOutlineClose />
                          Reject
                        </Button>
                      </div>
                    </Box>
                  ) : (
                    <Typography variant="subtitle2">
                      {getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs.answers[
                        index
                      ] ?? "N/A"}
                    </Typography>
                  )}
                </AccordionDetails>
              </Accordion>
            )
          )
        ) : (
          <Typography variant="body1" color="text.secondary">
            No Questions and Answers found for this Farm Visit
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FVQAModal;
