// Import Modules
import { createLogger, format, transports } from 'winston';
import appRoot from 'app-root-path';
import 'winston-daily-rotate-file';

// Import Constants
import { SERVICE_NAME } from '../constants';

// Define Log Transports
const logsTransports = {
    combine: new transports.DailyRotateFile({
        filename: `${appRoot}/../logs/${SERVICE_NAME}/combine/%DATE%.log`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '100m',
        maxFiles: '14d',
        frequency: '1h',
    }),
    error: new transports.DailyRotateFile({
        level: 'error',
        filename: `${appRoot}/../logs/${SERVICE_NAME}/error/%DATE%.log`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '100m',
        maxFiles: '14d',
        frequency: '1h',
    }),
};

// Define Log Production
const logsProduction = (path: string) => {
    return createLogger({
        format: format.combine(format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), format.errors({ stack: true }), format.json()),
        defaultMeta: { path },
        transports: [logsTransports.combine, logsTransports.error],
    });
};

// Export Log
export { logsProduction };
