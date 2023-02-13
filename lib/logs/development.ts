// Import Modules
import { createLogger, format, transports } from 'winston';

// Define Log Transports
const logsTransports = {
    console: new transports.Console(),
};

// Define Log Format
const logsFormat = format.printf(({ timestamp, path, level, message, stack, ms }) => {
    return `${timestamp} [${path}] ${level}: ${message || stack} (${ms})`;
});

// Define Log Development
const logsDevelopment = (path: string) => {
    return createLogger({
        format: format.combine(
            format.colorize(),
            format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
            format.errors({ stack: true }),
            format.ms(),
            logsFormat,
        ),
        defaultMeta: { path },
        transports: [logsTransports.console],
    });
};

// Export Log
export { logsDevelopment };
