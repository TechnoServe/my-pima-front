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
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { GET_FARM_VISIT_QAs } from "../../graphql/queries/farmVisitsRequests";
import { BeatLoader } from "react-spinners";
import { BsFillCaretDownFill } from "react-icons/bs";

const FVQAModal = ({ open, handleClose, fvId, rowDetails }) => {
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
        {rowDetails && (
          <List
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <ListItem
              sx={{
                width: "50%",
              }}
            >
              <ListItemText
                primary="Farm Visit Name:"
                secondary={rowDetails.fv_name}
              />
            </ListItem>
            <ListItem
              sx={{
                width: "50%",
              }}
            >
              <ListItemText
                primary="Training Group:"
                secondary={rowDetails.training_group}
              />
            </ListItem>
            <ListItem
              sx={{
                width: "50%",
              }}
            >
              <ListItemText
                primary="Training Session:"
                secondary={rowDetails.training_session}
              />
            </ListItem>
            <ListItem
              sx={{
                width: "50%",
              }}
            >
              <ListItemText primary="TNS Id:" secondary={rowDetails.tns_id} />
            </ListItem>
            <ListItem
              sx={{
                width: "50%",
              }}
            >
              <ListItemText
                primary="Farmer Trainer:"
                secondary={rowDetails.farmer_trainer}
              />
            </ListItem>
            <ListItem
              sx={{
                width: "50%",
              }}
            >
              <ListItemText
                primary="Visit Date:"
                secondary={rowDetails.date_visited}
              />
            </ListItem>
          </List>
        )}

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
        ) : getFarmVisitQAs.data?.getFVQAsByFarmVisits.status === 200 &&
          getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs.qas.length > 0 ? (
          getFarmVisitQAs.data.getFVQAsByFarmVisits.fvQAs.qas.map(
            (qa, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: ".5rem",
                  }}
                >
                  <Chip label={qa.practice_name} color="primary" />
                </div>
                {qa.questions.length > 0 ? (
                  qa.questions.map((item, index) => (
                    <Accordion
                      style={{
                        marginBottom: "1rem",
                      }}
                      key={index}
                    >
                      <AccordionSummary
                        expandIcon={<BsFillCaretDownFill />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          {`(${index + 1}) ${item}`}
                          {qa.answers[index] &&
                            /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(
                              qa.answers[index]
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
                        {!qa.answers[index] ? (
                          "N/A"
                        ) : /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(
                            qa.answers[index]
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
                              src={`data:image/png;base64,${qa.answers[index]}`}
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
                                  handleApproveImage(qa.answers[index])
                                }
                              >
                                <AiOutlineCheck />
                                Approve
                              </Button>
                              <Button
                                variant="contained"
                                color="error"
                                onClick={() =>
                                  handleRejectImage(qa.answers[index])
                                }
                              >
                                <AiOutlineClose />
                                Reject
                              </Button>
                            </div>
                          </Box>
                        ) : (
                          <Typography variant="subtitle2">
                            {qa.answers[index] ?? "N/A"}
                          </Typography>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  ))
                ) : (
                  <Typography
                    variant="caption"
                    display="block"
                    color="text.secondary"
                    gutterBottom
                  >
                    No Questions and Answers found for this Best Practice
                  </Typography>
                )}
                <Divider
                  variant="middle"
                  style={{
                    marginBottom: "1.5rem",
                  }}
                />
              </div>
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
