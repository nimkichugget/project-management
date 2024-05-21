import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming use of React Router
import { fetchSubmissions, submitGrades } from '../utils/auth'; // Assuming API functions
import { FormControl, FormLabel, Input, Textarea, Table, Tbody, Tr, Th, Td, Button, Box, Heading } from '@chakra-ui/react';

const GradeSubmissions = () => {
 
  return (
    <Box bg="gray.100" p={4} borderRadius="md">
      <Heading as="h3" size="md">
        Grade Student Submissions for Project
      </Heading>
      {/* <Table variant="simple">
        <Tbody>
          {submissions.map((submission) => (
            <Tr key={submission.studentId}>
              <Th>{submission.studentName}</Th>
              <Td>
                <FormControl>
                  <FormLabel htmlFor={`grade-${submission.studentId}`}>Grade</FormLabel>
                  <Input
                    id={`grade-${submission.studentId}`}
                    type="number"
                    value={submission.grade || ''}
                    onChange={(e) => handleGradeChange(submission.studentId, e.target.value)}
                    disabled={isSubmitting} // Disable grade input during submission
                  />
                </FormControl>
              </Td>
              <Td>
                <FormControl>
                  <FormLabel htmlFor={`feedback-${submission.studentId}`}>Feedback</FormLabel>
                  <Textarea
                    id={`feedback-${submission.studentId}`}
                    value={submission.feedback || ''}
                    onChange={(e) => handleFeedbackChange(submission.studentId, e.target.value)}
                    disabled={isSubmitting} // Disable feedback input during submission
                  />
                </FormControl>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button mt={4} type="submit" disabled={isSubmitting} onClick={handleSubmitGrades}>
        {isSubmitting ? 'Submitting...' : 'Submit Grades'}
      </Button> */}
    </Box>
  );
};

export default GradeSubmissions;
