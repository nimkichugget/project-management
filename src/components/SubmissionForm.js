import React, { useState } from 'react';
import { Form, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const SubmissionForm = ({ projectId, onSubmit }) => {
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('comment', comment);
    onSubmit(projectId, formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="file">Project Submission</FormLabel>
        <Input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="comment">Additional Comments</FormLabel>
        <Input id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      </FormControl>
      <Button type="submit">Submit Project</Button>
    </Form>
  );
};

export default SubmissionForm;
