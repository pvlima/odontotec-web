import axios from 'axios';
import checkExpiredToken from './interceptors/checkExpiredToken';

const api = axios.create({
  baseURL: 'http://192.168.2.32:3333',
});

checkExpiredToken(api);

export default api;
