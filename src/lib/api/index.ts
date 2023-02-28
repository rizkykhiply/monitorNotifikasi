// Import Modules
import axios from 'axios';

// Define Axios Config
const Api = axios.create({
    timeout: 30000,
});

// Export Axios
export { Api };
