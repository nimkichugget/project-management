import React from 'react';
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';

const TeamCard = ({ teamName, members }) => {
  return (
    <Box bg="gray.100" p={4} borderRadius="md">
      <Heading as="h5" size="md">{teamName}</Heading>
      <Text>Team Members:</Text>
      <List spacing={2}>
        {members.map((member) => (
          <ListItem key={member.id}>{member.name}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TeamCard;
