// Import Modules
import axios from 'axios';

// Define Axios Config
const Api = axios.create({
    timeout: 30000,
});

// Define Axios Request Interceptor
Api.interceptors.request.use(
    (req) => {
        return req;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Define Axios Response Interceptor
Api.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Export Axios
export default Api;
