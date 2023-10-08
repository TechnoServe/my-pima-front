import React, { useEffect } from "react";
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
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_FARM_VISIT_QAs,
  UPDATE_QA_IMAGE,
} from "../../graphql/queries/farmVisitsRequests";
import { BeatLoader } from "react-spinners";
import { BsFillCaretDownFill } from "react-icons/bs";
import toast from "react-hot-toast";

const FVQAModal = ({ open, handleClose, fvId, rowDetails }) => {
  const getFarmVisitQAs = useQuery(GET_FARM_VISIT_QAs, {
    variables: { fvId: fvId },
  });

  const [updateQAImage] = useMutation(UPDATE_QA_IMAGE);

  const handleImageStatus = async (bpId, practiceName, status) => {
    // if practiceName is more than one word, remove the spaces

    const practiceNameNoSpace = practiceName.replace(/\s/g, "");

    await updateQAImage({
      variables: {
        bpId: bpId,
        fieldName: practiceNameNoSpace,
        imageStatus: status,
      },
    });
  };

  useEffect(() => {
    if (updateQAImage.data?.updateFVQAImageStatus.status === 200) {
      toast.success("Image Status Updated Successfully");
    } else if (updateQAImage.data?.updateFVQAImageStatus.status === 400) {
      toast.error("Image Status Update Failed");
    } else if (updateQAImage.data?.updateFVQAImageStatus.status === 500) {
      toast.error("Server Error");
    }
  }, [updateQAImage.data]);

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
                  qa.questions.map(
                    (item, index) =>
                      item !== "Status of the photo" && (
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
                                /^(data:image\/[a-zA-Z+]+;base64,)[\w/+=]+$/.test(
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
                              {
                                // if image is approved or rejected, show chip
                                qa.answers[index + 1] === "approved" ? (
                                  <Chip
                                    label="Approved"
                                    variant="outlined"
                                    size="10"
                                    color="success"
                                    style={{
                                      marginLeft: "1rem",
                                    }}
                                  />
                                ) : qa.answers[index + 1] === "rejected" ? (
                                  <Chip
                                    label="Rejected"
                                    variant="outlined"
                                    size="10"
                                    color="error"
                                    style={{
                                      marginLeft: "1rem",
                                    }}
                                  />
                                ) : null
                              }
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {!qa.answers[index] ? (
                              "N/A"
                            ) : /^(data:image\/[a-zA-Z+]+;base64,)[\w/+=]+$/.test(
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
                                  src={qa.answers[index]}
                                  alt="img"
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                  }}
                                />
                                {
                                  // if image is approved or rejected, don't show the buttons
                                  !(
                                    qa.answers[index + 1] === "approved" ||
                                    qa.answers[index + 1] === "rejected"
                                  ) && (
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
                                          handleImageStatus(
                                            getFarmVisitQAs.data
                                              .getFVQAsByFarmVisits.fvQAs.bp_id,
                                            qa.practice_name,
                                            "approved"
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
                                          handleImageStatus(
                                            getFarmVisitQAs.data
                                              .getFVQAsByFarmVisits.fvQAs.bp_id,
                                            qa.practice_name,
                                            "rejected"
                                          )
                                        }
                                      >
                                        <AiOutlineClose />
                                        Reject
                                      </Button>
                                    </div>
                                  )
                                }
                              </Box>
                            ) : (
                              <Typography variant="subtitle2">
                                {qa.answers[index] ?? "N/A"}
                              </Typography>
                            )}
                          </AccordionDetails>
                        </Accordion>
                      )
                  )
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
