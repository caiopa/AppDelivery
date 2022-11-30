import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
  headers: {
    common: {
      Authorization: localStorage.getItem('token'),
    },
  },
});

export const login = async (email, password) => {
  const result = await api.post('/login', { email, password });
  return result.data;
};

// export const setToken = (token) => {
//   api.defaults.headers.common.Authorization = token;
// };

// export const getData = async (endpoint) => {
//   const { data } = await api.get(endpoint);
//   return data;
// };

// export const postData = async (endpoint, body) => {
//   const { data } = await api.post(endpoint, body);
//   return data;
// };

export default api;
