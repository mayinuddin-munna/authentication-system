import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://interview.pencilwoodbd.org/api/',
});

export default axiosInstance;
