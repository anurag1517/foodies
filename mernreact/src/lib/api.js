import axios from 'axios';
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL|| "http://localhost:4000/api",
  withCredentials: true, 
});