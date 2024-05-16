import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Assuming use of React Router
// import { fetchProjectDetails } from '../utils/auth'; // Assuming API function

const ViewProject = () => {
  // const { projectId } = useParams();
  // const [projectDetails, setProjectDetails] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const details = await fetchProjectDetails(projectId);
  //     setProjectDetails(details);
  //   };
  //   fetchData();
  // }, [projectId]);

  // if (!projectDetails) {
  //   return <div>Loading project details...</div>;
  // }

  return (
    <div>
      <h2>Project Details</h2>
      {/* Display project details (description, team size, prerequisites, etc.) */}
      {/* Optionally, display team information and submission status for students */}
    </div>
  );
};

export default ViewProject;
