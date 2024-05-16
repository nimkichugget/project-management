const login = async (username, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      // Store authentication token securely (e.g., local storage with encryption)
      localStorage.setItem('authToken', data.token);
      return true;
    } catch (error) {
      console.error('Error logging in:', error);
      return false; // Handle login failure
    }
  };
  
  const logout = () => {
    localStorage.removeItem('authToken');
    // Optionally, send a logout request to your backend API
  };
  
  const isLoggedIn = () => {
    return !!localStorage.getItem('authToken');
  };
  
  export { login, logout, isLoggedIn };
  