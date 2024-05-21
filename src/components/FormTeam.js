import React, { useState, useEffect } from 'react'; 
import { Flex, Text, FormControl, Button, Input } from '@chakra-ui/react';
import PersonIcon from '@mui/icons-material/Person';
import FindMembers from './FindMembers.js';
import { addTeam, getTeams } from '../firestore.js';

const ParticipantInput = ({ participantNumber, participant, setParticipant }) => (
  <Flex
    w="400px"
    gap="10px"
    direction="column"
    style={{ marginBottom: '20px' }}
  >
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      gap="10px"
      style={{
        color: '#6741a0',
        fontFamily: 'Hanken Grotesk',
        fontWeight: 'bold',
        fontSize: '16px',
      }}
    >
      <PersonIcon />
      Participant {participantNumber}
    </Flex>
    <Input
      style={{
        backgroundColor: '#f0f0f0',
        padding: '0px 20px',
        height: '40px',
        borderRadius: '7px',
        border: '1px solid gray',
      }}
      placeholder="Participant ID"
      value={participant}
      onChange={(e) => setParticipant(participantNumber - 1, e.target.value)}
    />
  </Flex>
);

const TeamForm = ({ onSubmit }) => {
  const [participants, setParticipants] = useState(['', '', '', '']);
  const [teams, setTeams] = useState([]);
  const [open, setOpen] = useState(false);

  const setParticipant = (index, value) => {
    const newParticipants = [...participants];
    newParticipants[index] = value;
    setParticipants(newParticipants);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async () => {
    if (participants.filter(p => p.trim() !== '').length < 2) {
      alert('Please fill at least two participant IDs');
      return;
    }

    const team = { participants };
    await addTeam(team);
    fetchTeams(); // Refresh the team list after adding a new team
    handleReset(); // Reset the input fields
  };

  const handleReset = () => {
    setParticipants(['', '', '', '']); // Reset the input fields
  };

  const fetchTeams = async () => {
    const fetchedTeams = await getTeams();
    setTeams(fetchedTeams);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <Flex w="100%">
      <Flex w="50%" direction="column">
        <Text
          style={{
            margin: '0',
            fontWeight: 'semibold',
            fontSize: '20px',
            color: 'gray',
            fontFamily: 'Public Sans',
          }}
        >
          FORM A TEAM
        </Text>
        <Text
          style={{
            margin: 0,
            marginTop: '5px',
            fontWeight: 'semibold',
            fontSize: '26px',
            color: '#141E28',
            fontFamily: 'Domine',
          }}
        >
          Semester Project Title
        </Text>
        <Text
          style={{
            margin: 0,
            marginTop: '40px',
            fontWeight: 'semibold',
            fontSize: '24px',
            color: '#2E455D',
            fontFamily: 'Public Sans',
          }}
        >
          Pre-requisites
        </Text>
        <ol
          style={{
            fontFamily: 'Public Sans',
            fontSize: '18px',
            color: '#2E455D',
          }}
        >
          <li>Team Size: 4 students</li>
          <li>Skills required: HTML, CSS, JAVASCRIPT, C++</li>
          <li>Project Duration: 3 months</li>
          <li>Team formation deadline: 30th May</li>
        </ol>
      </Flex>
      <Flex w="50%" justifyContent="center">
        <Flex
          direction="column"
          style={{
            border: '1px solid gray',
            borderRadius: '20px',
            padding: '20px',
          }}
        >
          <FormControl isRequired>
            {[1, 2, 3, 4].map((participantNumber) => (
              <ParticipantInput
                key={participantNumber}
                participantNumber={participantNumber}
                participant={participants[participantNumber - 1]}
                setParticipant={setParticipant}
              />
            ))}
          </FormControl>
          <Flex margin="10px 0px" justifyContent="space-between">
            <Button
              style={{
                borderRadius: '20px',
                padding: '10px 20px',
                backgroundColor: 'white',
                color: '#6741a0',
                fontFamily: 'Hanken Grotesk',
                fontWeight: '700',
                border: '1px solid #6741a0',
                fontSize: '16px',
              }}
              _hover={{ opacity: 0.8 }}
              onClick={handleFormSubmit}
            >
              Freeze Team
            </Button>
            <Button
              style={{
                borderRadius: '20px',
                padding: '8px 18px',
                backgroundColor: '#6741a0',
                color: 'white',
                fontFamily: 'Hanken Grotesk',
                fontWeight: '700',
                border: '1px solid white',
                fontSize: '16px',
              }}
              _hover={{ opacity: 0.8 }}
              onClick={handleClickOpen}
            >
              Find Members
            </Button>
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
