import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-api-erickreis.herokuapp.com/',
});

export default api;
