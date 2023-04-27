import axios from 'axios';

const api = axios.create({
    baseURL:
        process.env.baseURL ||
        'http://143.198.42.69' ||
        'http://localhost:3000/api',
});

export default api;
