import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, RadioGroup, Radio, Input, Button, Select } from '@chakra-ui/react';
import { fetchTeams, createTeam, joinTeam } from '../utils/auth'; // Assuming API functions

const TeamForm = ({ onSubmit }) => {
  // const [createTeamMode, setCreateTeamMode] = useState(true);
  // const [teamName, setTeamName] = useState('');
  // const [existingTeams, setExistingTeams] = useState([]);
  // const [selectedTeamId, setSelectedTeamId] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const teams = await fetchTeams();
  //     setExistingTeams(teams);
  //   };
  //   fetchData();
  // }, []);

  // const handleCreateTeam = async (e) => {
  //   e.preventDefault();
  //   await createTeam(teamName);
  //   onSubmit('create', teamName); // Inform parent component about team creation
  // };

  // const handleJoinTeam = async (e) => {
  //   e.preventDefault();
  //   if (selectedTeamId) {
  //     await joinTeam(selectedTeamId);
  //     onSubmit('join', selectedTeamId); // Inform parent component about team joining
  //   }
  // };

  return (
    <>
      {/* <RadioGroup value={createTeamMode} onChange={(val) => setCreateTeamMode(val)}>
        <FormControl display="flex" alignItems="center">
          <Radio value={true}>Create Team</Radio>
          <FormLabel ml={2}>Create a new team</FormLabel>
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <Radio value={false}>Join Existing Team</Radio>
          <FormLabel ml={2}>Join an existing team</FormLabel>
        </FormControl>
      </RadioGroup>
      {createTeamMode && (
        <FormControl mt={4}>
          <FormLabel htmlFor="teamName">Team Name</FormLabel>
          <Input id="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
        </FormControl>
      )}
      {!createTeamMode && existingTeams.length > 0 && (
        <FormControl mt={4}>
          <FormLabel htmlFor="existingTeam">Select Team</FormLabel>
          <Select id="existingTeam" value={selectedTeamId} onChange={(e) => setSelectedTeamId(e.target.value)}>
            {existingTeams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
      <Button mt={4} type="submit" disabled={createTeamMode ? !teamName : !selectedTeamId}>
        {createTeamMode ? 'Create Team' : 'Join Team'}
      </Button> */}
    </>
  );
};

export default TeamForm;
