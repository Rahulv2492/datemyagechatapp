import config from './../config/config';
import fs from 'fs';
import winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

const dir = 'logs/';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

let transport = new (winston.transports.DailyRotateFile)({
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: config.ENV === 'development' ? 'debug' : 'info',
    filename: dir + '/app.log', json: true
});

let logger = winston.createLogger({
    transports: [
        transport
    ],
    exitOnError: false
});


module.exports = logger;


