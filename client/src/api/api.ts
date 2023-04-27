import axios from 'axios';

const api = axios.create({
    baseURL: 'http://143.198.42.69/api',
});

export default api;
