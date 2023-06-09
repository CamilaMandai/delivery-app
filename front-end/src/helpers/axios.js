import axios from 'axios';

// Usei o .env aqui, mas o .env com a porta do backend ainda está com .example
export const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

export const requestValidateToken = async (token) => {
  const { data } = await api.post('/login/validateToken', token);
  return data;
};

export const requestCreateUser = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestOrders = async () => {
  const { data } = await api.get('/orders');
  return data;
};

export const requestAllUsers = async () => {
  const { data } = await api.get('/login/getAll');
  return data;
};

export const createSale = async (body) => {
  console.log('====>', body);
  const { data } = await api.post('/orders', body);
  console.log('====> data', data);
  return data;
};

export const requestSaleBySeller = async (id) => {
  const { data } = await api.get(`/orders/seller/${id}`);
  return data;
};

export const requestSaleByUser = async (id) => {
  const { data } = await api.get(`/orders/customer/${id}`);
  return data;
};

export const requestSale = async (id) => {
  const { data } = await api.get(`/orders/${id}`);
  return data;
};

export const udpateSaleStatus = async (body) => {
  await api.patch('orders/sale/status', body);
};

export const requestAdmin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const createSaleProduct = async (body) => {
  const { data } = await api.post('/saleproducts', body);
  return data;
};

export const requestProductsBySaleId = async (id) => {
  const { data } = await api.get(`/saleproducts/${id}`);
  return data;
};

export const removeUser = async (id) => {
  await api.delete(`/login/${id}`);
};
