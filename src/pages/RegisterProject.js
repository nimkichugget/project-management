import React, { useState } from 'react';
// import { ProjectForm } from '../components/ProjectForm'; // Assuming ProjectForm component import
// import { createProject } from '../utils/auth'; // Assuming API function for project creation

const RegisterProject = () => {
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
    teamSize: null,
    prerequisites: '',
  });

  // const handleSubmit = async (data) => {
  //   setProjectDetails(data); // Update local state
  //   await createProject(data); // Call API to create project
  //   // Handle successful creation (e.g., navigate to project details page)
  // };

  return (
    <div>
      <h2>Register Project</h2>
      {/* <ProjectForm onSubmit={handleSubmit} /> */}
    </div>
  );
};

export default RegisterProject;
