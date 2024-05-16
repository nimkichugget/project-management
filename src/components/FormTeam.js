import React from "react";
import { Flex, Text, FormControl, Button, Input } from "@chakra-ui/react";
import PersonIcon from "@mui/icons-material/Person";

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
  return (
    <Flex w="100%">
      <Flex w="50%" direction={"column"}>
        <Text
          style={{
            margin: "0",
            fontWeight: "bold",
            fontSize: "24px",
            color: "lightgray",
            fontFamily: "Hanken Grotesk",
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
            color: "black",
            fontFamily: "Hanken Grotesk",
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
            color: "gray",
            fontFamily: "Hanken Grotesk",
          }}
        >
          Prerequisites
        </Text>
        <ol
          style={{
            fontFamily: "Hanken Grotesk",
            fontSize: "18px",
            color: "gray",
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
            >
              Find Members
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TeamForm;
