/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Flex, Text, FormControl, Button, Input } from "@chakra-ui/react";
import PersonIcon from "@mui/icons-material/Person";
import FindMembers from "./FindMembers.js";

const ParticipantInput = ({ participantNumber }) => (
  <Flex
    w="400px"
    gap="10px"
    direction={"column"}
    style={{ marginBottom: "20px" }}
  >
    <Flex
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap="10px"
      style={{
        color: "#6741a0",
        fontFamily: "Hanken Grotesk",
        fontWeight: "bold",
        fontSize: "16px",
      }}
    >
      <PersonIcon />
      Participant {participantNumber}
    </Flex>
    <Input
      style={{
        backgroundColor: "#f0f0f0",
        padding: "0px 20px",
        height: "40px",
        borderRadius: "7px",
        border: "1px solid gray",
      }}
      placeholder="Participant ID"
    />
  </Flex>
);

const TeamForm = ({ onSubmit }) => {
  // const [isOpen, setIsOpen] = useState(false); // Initial state for modal visibility

  // const onOpen = () => setIsOpen(true); // Function to open the modal
  // const onClose = () => setIsOpen(false); // Function to close the modal
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Flex w="100%">
      <Flex w="50%" direction={"column"}>
        <Text
          style={{
            margin: "0",
            fontWeight: "semibold",
            fontSize: "20px",
            color: "gray",
            fontFamily: "Public Sans",
          }}
        >
          FORM A TEAM
        </Text>
        <Text
          style={{
            margin: 0,
            marginTop: "5px",
            fontWeight: "semibold",
            fontSize: "26px",
            color: "#141E28",
            fontFamily: "Domine",
          }}
        >
          Semester Project Title
        </Text>
        <Text
          style={{
            margin: 0,
            marginTop: "40px",
            fontWeight: "semibold",
            fontSize: "24px",
            color: "#2E455D",
            fontFamily: "Public Sans",
          }}
        >
          Pre-requisites
        </Text>
        <ol
          style={{
            fontFamily: "Public Sans",
            fontSize: "18px",
            color: "#2E455D",
          }}
        >
          <li>Team Size: 4 students</li>
          <li>Skills required: HTML, CSS, JAVASCRIPT, C++</li>
          <li>Project Duration: 3 months</li>
          <li>Team formation deadline: 30th May</li>
        </ol>
      </Flex>
      <Flex w="50%" justifyContent={"center"}>
        <Flex
          direction="column"
          style={{
            border: "1px solid gray",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <FormControl isRequired>
            {[1, 2, 3, 4].map((participantNumber) => (
              <ParticipantInput
                key={participantNumber}
                participantNumber={participantNumber}
              />
            ))}
          </FormControl>
          <Flex margin="10px 0px" justifyContent={"space-between"}>
            <Button
              style={{
                borderRadius: "20px",
                padding: "10px 20px",
                backgroundColor: "white",
                color: "#6741a0",
                fontFamily: "Hanken Grotesk",
                fontWeight: "700",
                border: "1px solid #6741a0",
                fontSize: "16px",
              }}
              _hover={{ opacity: 0.8 }}
            >
              Freeze Team
            </Button>
            <Button
              style={{
                borderRadius: "20px",
                padding: "8px 18px",
                backgroundColor: "#6741a0",
                color: "white",
                fontFamily: "Hanken Grotesk",
                fontWeight: "700",
                border: "1px solid white",
                fontSize: "16px",
              }}
              _hover={{ opacity: 0.8 }}
              // onClick={onOpen}
              onClick={handleClickOpen}
            >
              Find Members
            </Button>
            {/* Render FindMembers conditionally based on isOpen state */}
            {isOpen && (<FindMembers isOpen={isOpen} onClose={onClose} />)}
          </Flex>
        </Flex>
      </Flex>
      {open && (
        <FindMembers
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      )}
    </Flex>
  );
};

export default TeamForm;
