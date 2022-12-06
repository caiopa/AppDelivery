import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}`,
});

export async function loginPost(endpoint, body) {
  const { data } = await api.post(endpoint, body);
  return data;
}

export async function apiPost(endpoint, body, token) {
  const { data } = await api.post(endpoint, body, { headers: { authorization: token } });
  return data;
}

export async function getProducts(endpoint) {
  const { data } = await api.get(endpoint);
  return data;
}
