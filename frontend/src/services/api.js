import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust based on your backend
});

// Example API call
export const login = (email, password) => API.post('/login', { email, password });

export default API;
