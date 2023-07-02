'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.errorLogger = exports.logger = void 0;
const winston_1 = require('winston');
const { combine, timestamp, label, printf } = winston_1.format;
const winston_daily_rotate_file_1 = __importDefault(
  require('winston-daily-rotate-file')
);
const path_1 = __importDefault(require('path'));
/*
// custom log format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${date.toDateString()} ${hours}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
});
// info logger
const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),

    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'success-%DATE%.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

// error logger
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),

    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'error-%DATE%.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});
*/
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${date.toDateString()} ${hour}:${minutes}:${seconds} } [${label}] ${level}: ${message}`;
});
const logger = (0, winston_1.createLogger)({
  level: 'info',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat),
  transports: [
    new winston_1.transports.Console(),
    new winston_daily_rotate_file_1.default({
      filename: path_1.default.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'phu-%DATE%-success.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});
exports.logger = logger;
const errorLogger = (0, winston_1.createLogger)({
  level: 'error',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat),
  transports: [
    new winston_1.transports.Console(),
    new winston_daily_rotate_file_1.default({
      filename: path_1.default.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'phu-%DATE%-error.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});
exports.errorLogger = errorLogger;
