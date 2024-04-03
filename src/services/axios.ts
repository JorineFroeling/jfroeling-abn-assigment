import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.tvmaze.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default axiosClient;
