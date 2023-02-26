import axios from 'axios';
import store from './store';
const { VUE_APP_SERVER } = process.env;

const http = axios.create({
    baseURL: `${VUE_APP_SERVER}`,
    headers: {
        'Content-type': 'application/json',
    },
});

http.interceptors.request.use(
    (config) => {
        const token = store.getters['auth/isAuthenticated'];
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default http;
