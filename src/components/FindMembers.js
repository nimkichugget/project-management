import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import { Tooltip } from "@mui/material";
import { getTeams } from "../firestore";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function FindMembers(props) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const fetchedTeams = await getTeams();
      setTeams(fetchedTeams);
    };
    fetchTeams();
  }, []);

  return (
    <>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Flex
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              m={0}
              style={{
                fontSize: "28px",
                fontFamily: "Jost",
              }}
            >
              CURRENT TEAMS
            </Text>
          </Flex>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Flex p="15px" justifyContent={"center"} alignItems={"center"}>
            <Flex w="90%" wrap="wrap" justifyContent={"space-between"}>
              {teams.map((team, index) => (
                <Flex
                  className="parent"
                  direction={"column"}
                  style={{
                    padding: "20px 20px 10px 20px",
                    fontSize: "40px",
                    boxShadow: "#dddddd 0px 0px 20px 0px",
                    borderRadius: "20px",
                    width: "190px",
                    marginBottom: "25px",
                    transition: "all 0.4s ease",
                  }}
                  _hover={{
                    backgroundColor: "#efeafa",
                    boxShadow: "none !important",
                  }}
                  key={index}
                  w="32%"
                >
                  <Text
                    m={0}
                    fontFamily={"Jost"}
                    fontWeight={"700"}
                    fontSize={20}
                  >
                    Team {index + 1}
                  </Text>
                  <Flex m="20px 0" gap="10px">
                    {team.participants.map((member, index) => (
                      <Tooltip title={member} key={index}>
                        <Avatar sx={{ color: "#7236FF", bgcolor: "#D5E5FF" }} variant="rounded">
                          {typeof member === "string" &&
                            member
                              .split(" ")
                              .map((name) => name[0])
                              .join("")}
                        </Avatar>
                      </Tooltip>
                    ))}
                  </Flex>
                  <Flex
                    style={{
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Flex
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "center",
                        color: "gray",
                      }}
                      _hover={{ color: "black !important" }}
                    >
                      <Text
                        m={0}
                        fontFamily={"Jost"}
                        fontWeight={"bold"}
                        fontSize={16}
                      >
                        Request a slot
                      </Text>
                      <ArrowForwardIcon
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

export default FindMembers;
