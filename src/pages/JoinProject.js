import React, { useState, useEffect } from 'react';
import { TeamCard } from '../components/TeamCard'; // Assuming component imports
import { TeamForm } from '../components/FormTeam';
// import { fetchTeams, joinTeam } from '../utils/auth'; // Assuming API functions

const JoinProject = () => {
  // const [existingTeams, setExistingTeams] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const teams = await fetchTeams();
  //     setExistingTeams(teams);
  //   };
  //   fetchData();
  // }, []);

  // const handleJoin = async (action, teamId) => {
  //   if (action === 'join') {
  //     await joinTeam(teamId);
  //     // Handle successful joining (e.g., show confirmation message)
  //   }
  // };

  return (
    <div>
      <h2>Join Project</h2>
      {/* <TeamForm onSubmit={handleJoin} /> */}
      {/* {existingTeams.length > 0 && (
        <>
          <h3>Available Projects</h3>
          {existingTeams.map((team) => (
            <TeamCard key={team.id} teamName={team.name} members={team.members} />
          ))}
        </>
      )} */}
    </div>
  );
};

export default JoinProject;
