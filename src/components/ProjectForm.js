import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import {
  Form,
  FormControl,
  FormLabel,
  Input,
  Select,
  TextArea,
} from "@chakra-ui/react";

const ProjectForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [teamSize, setTeamSize] = useState(null);
  const [prerequisites, setPrerequisites] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, teamSize, prerequisites });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="title">Project Title</FormLabel>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      {/* ...other form fields... */}
      <Button type="submit">Create Project</Button>
    </Form>
  );
};

export default ProjectForm;
