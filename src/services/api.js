import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bible-sinatra-api.herokuapp.com/',
});

export default api;
