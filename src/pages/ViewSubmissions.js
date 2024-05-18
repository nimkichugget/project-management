/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Assuming use of React Router
// import { fetchSubmissions } from '../utils/auth'; // Assuming API function
import { DownloadIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';

const ViewSubmissions = () => {
  // const { projectId } = useParams();
  // const [submissions, setSubmissions] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const studentSubmissions = await fetchSubmissions(projectId);
  //     setSubmissions(studentSubmissions);
  //   };
  //   fetchData();
  // }, [projectId]);

  return (
    // <div>
    //   <h2>Student Submissions for Project: {projectId}</h2>
    //   {submissions.length > 0 ? (
    //     <ul>
    //       {submissions.map((submission) => (
    //         <li key={submission.id}>
    //           {submission.studentName} - {submission.filename} (
    //           <Link href={submission.downloadUrl} isExternal download>
    //             <DownloadIcon mr={2} />
    //             Download
    //           </Link>
    //           )
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No submissions received yet.</p>
    //   )}
    // </div>
    <div>Hi</div>
  );
};

export default ViewSubmissions;
