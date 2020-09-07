/* eslint-disable no-param-reassign */
import { AxiosInstance } from 'axios';

const checkExpiredToken = (axios: AxiosInstance): void => {
  axios.interceptors.response.use(
    response => {
      return response;
    },
    err => {
      if (err.response.status === 401) {
        localStorage.removeItem('@OdontoTec:token');
        localStorage.removeItem('@OdontoTec:user');
      }

      return Promise.reject(err);
    },
  );
};

export default checkExpiredToken;
