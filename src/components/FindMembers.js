/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
import { Tooltip } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function FindMembers(props) {
  const cards = {
    1: {
      member1: "Vineet Kumar",
      member2: "Saathvika Jali",
    },
    2: {
      member1: "Vineet Kumar",
      member2: "Saathvika Jali",
      member3: "Vineet Kumar",
      member4: "Vineet Kumar",
    },
    3: {
      member1: "Vineet Kumar",
      member2: "Vineet Kumar",
      member3: "Vineet Kumar",
      member4: "Saathvika Jali",
    },
    4: {
      member1: "Vineet Kumar",
      member2: "Vineet Kumar",
      member3: "Saathvika Jali",
      member4: "Vineet Kumar",
    },
    5: {
      member1: "Vineet Kumar",
      member2: "Saathvika Jali",
      member3: "Vineet Kumar",
      member4: "Vineet Kumar",
    },
    6: {
      member1: "Vineet Kumar",
      member2: "Saathvika Jali",
      member3: "Vineet Kumar",
      member4: "Vineet Kumar",
      isFull: true,
    },
  };
  //   const [open, setOpen] = useState(false);
  const Team = ({ teamId, members }) => (
    <div>
      <Text m={0} fontFamily={"Jost"} fontWeight={"700"} fontSize={20}>
        Team {teamId}
      </Text>
      <Flex m="20px 0" gap="10px">
        {members.map((member, index) => (
          <Avatar key={index} sx={{ bgcolor: "#6741a0" }}>
            {member
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </Avatar>
        ))}
      </Flex>
    </div>
  );

  //   const [currentTeamId, setCurrentTeamId] = useState(1);

  //   const handleNextTeam = () => {
  //     setCurrentTeamId((prevId) =>
  //       prevId < Object.keys(cards).length ? prevId + 1 : 1
  //     );
  //   };

  //   const currentTeam = cards[currentTeamId];
  //   const members = Object.values(currentTeam).filter(
  //     (value) => typeof value === "string"
  //   );

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
                // fontFamily: "Hanken Grotesk",
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
              {Object.keys(cards).map((e) => {
                const card = cards[e];
                const members = Object.values(card).filter(value => typeof value === 'string');
                return (
                  <Flex
                    className="parent"
                    direction={"column"}
                    style={{
                      //   backgroundColor: "#efeafa",
                      padding: "20px 20px 10px 20px",
                      // height: "230px",
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
                    key={e}
                    w="32%"
                  >
                    <Text
                      m={0}
                      fontFamily={"Jost"}
                      fontWeight={"700"}
                      fontSize={20}
                    >
                      Team {e}
                    </Text>
                    {/* <Flex m="20px 0" gap="10px">
                      <Avatar sx={{ bgcolor: "#6741a0" }}>VK</Avatar>
                      <Avatar sx={{ bgcolor: "#6741a0" }}>VK</Avatar>
                      <Avatar sx={{ bgcolor: "#6741a0" }}>VK</Avatar>
                    </Flex> */}
                    {/* <Team teamId={currentTeamId} members={members} /> */}
                    <Flex m="20px 0" gap="10px">
                      {members.map((member, index) => (
                        <Tooltip title={member}>
                          <Avatar key={index} sx={{ color:"#7236FF", bgcolor: "#D5E5FF" }} variant="rounded">
                            {member
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
                          //   color={"gray"}
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
                );
              })}
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
