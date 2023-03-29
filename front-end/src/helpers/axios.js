import axios from 'axios';

// Usei o .env aqui, mas o .env com a porta do backend ainda está com .example
export const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}`,
});

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};
