import axios from 'axios';

const api = axios.create({
  baseURL: 'http://loaclhost:8000',
});

export default api;
