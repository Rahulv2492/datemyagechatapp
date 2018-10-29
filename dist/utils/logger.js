'use strict';

var _config = require('./../config/config');

var _config2 = _interopRequireDefault(_config);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _winstonDailyRotateFile = require('winston-daily-rotate-file');

var DailyRotateFile = _interopRequireWildcard(_winstonDailyRotateFile);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dir = 'logs/';

if (!_fs2.default.existsSync(dir)) {
    _fs2.default.mkdirSync(dir);
}

var transport = new _winston2.default.transports.DailyRotateFile({
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: _config2.default.ENV === 'development' ? 'debug' : 'info',
    filename: dir + '/app.log', json: true
});

var logger = _winston2.default.createLogger({
    transports: [transport],
    exitOnError: false
});

module.exports = logger;