const BASE_URL = 'http://your-api-server.com/api/'; // Replace with your actual API endpoint

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Handle errors appropriately (e.g., display error messages)
    throw error; // Re-throw for potential handling in calling component
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await fetch(`${BASE_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData),
    });
    if (!response.ok) {
      throw new Error('Failed to create project');
    }
    // Handle successful creation (e.g., parse response data)
  } catch (error) {
    console.error('Error creating project:', error);
    // Handle errors appropriately
    throw error; // Re-throw for potential handling in calling component
  }
};

// Implement similar functions for other API endpoints (fetchTeams, joinTeam, fetchSubmissions, submitGrades, etc.)

// Consider using an HTTP library like Axios for cleaner syntax and advanced features
