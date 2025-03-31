import axios from 'axios';

export const AUTH_API = axios.create({
  baseURL: 'http://localhost:21157/api/v1/identity'
});
