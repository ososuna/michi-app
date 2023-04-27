import axios from 'axios';
import { API_URL } from '@env';

const catApi = axios.create({
  baseURL: API_URL,
});

export default catApi;
