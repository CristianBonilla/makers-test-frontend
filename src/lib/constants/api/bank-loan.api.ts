import axios from 'axios';

export const BANK_LOAN_API = axios.create({
  baseURL: 'http://localhost:21157/api/v1/bankloan'
});
