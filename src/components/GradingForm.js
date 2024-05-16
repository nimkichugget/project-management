import React, { useState } from 'react';
import { Form, FormControl, FormLabel, Input, Textarea, Table, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const GradingForm = ({ studentSubmissions, onSubmit }) => {
  const [grades, setGrades] = useState({}); // Object to store student grades

  const handleGradeChange = (studentId, value) => {
    setGrades({ ...grades, [studentId]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(grades);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Table variant="simple">
        <Tbody>
          {studentSubmissions.map((submission) => (
            <Tr key={submission.studentId}>
              <Th>{submission.studentName}</Th>
              <Td>
                <FormControl>
                  <Input type="number" value={grades[submission.studentId] || ''} onChange={(e) => handleGradeChange(submission.studentId, e.target.value)} />
                </FormControl>
              </Td>
              <Td>
                <FormControl>
                  <Textarea value={grades[submission.studentId]?.feedback || ''} onChange={(e) => setGrades({ ...grades, [submission.studentId]: { ...grades[submission.studentId], feedback: e.target.value } })} />
                </FormControl>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button type="submit">Submit Grades</Button>
    </Form>
  );
};

export default GradingForm;
