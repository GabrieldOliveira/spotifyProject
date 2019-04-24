import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/GabrieldOliveira/testapi',
});

export default api;
