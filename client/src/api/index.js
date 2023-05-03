import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000' });

export const getPhones = () => httpClient.get('/api/phones?limit=50&offset=0');

export const createPhone = data => httpClient.post('/api/phones', data);

export const deletePhone = phoneId =>
  httpClient.delete(`/api/phones/${phoneId}`);
