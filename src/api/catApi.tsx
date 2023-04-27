import axios from 'axios';
import { API_URL, API_KEY } from '@env';

const catApi = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

export default catApi;
