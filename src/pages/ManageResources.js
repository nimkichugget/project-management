import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming use of React Router
import { uploadResource } from '../utils/auth'; // Assuming API function

const ManageResources = () => {
  // const { projectId } = useParams();
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', selectedFile);
  //   formData.append('title', title);
  //   formData.append('description', description);
  //   await uploadResource(projectId, formData);
  //   // Handle successful upload (e.g., clear form or show confirmation message)
  // };

  return (
    <div>
      <h2>Manage Resources for Project:</h2>
      {/* <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Resource Title" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Resource Description" />
        <button type="submit">Upload Resource</button>
      </form> */}
    </div>
  );
};

export default ManageResources;
