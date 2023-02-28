// Import All Logs
import { logsDevelopment } from './development';
import { logsProduction } from './production';

// Import Constants
import { SERVICE_NODE_ENV } from '../constants';

// Define Log Service
const logs = SERVICE_NODE_ENV === 'development' ? logsDevelopment : logsProduction;

// Export Log
export { logs };
