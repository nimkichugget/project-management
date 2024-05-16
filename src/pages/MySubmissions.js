import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming use of React Router
import { fetchSubmissions } from '../utils/auth'; // Assuming API function
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';

const MySubmissions = () => {
  const { projectId } = useParams();
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const studentSubmissions = await fetchSubmissions(projectId);
      setSubmissions(studentSubmissions);
    };
    fetchData();
  }, [projectId]);

  return (
    <Box bg="gray.100" p={4} borderRadius="md">
      <Heading as="h3" size="md">
        My Submissions for Project: {projectId}
      </Heading>
      {submissions.length > 0 ? (
        <List spacing={2}>
          {submissions.map((submission) => (
            <ListItem key={submission.id}>
              <Text>{submission.filename}</Text>
              <Text fontSize="sm">Submitted on: {submission.submittedAt}</Text>
            </ListItem>
          ))}
        </List>
      ) : (
        <Text>You haven't submitted anything yet.</Text>
      )}
    </Box>
  );
};

export default MySubmissions;
