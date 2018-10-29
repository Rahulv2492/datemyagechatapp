'use strict';

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.ensureAuth = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({ success: false, data: 'Auth headers required' });
    }
    var token = req.headers.authorization;
    _jsonwebtoken2.default.verify(token, _config2.default.SECRET, function (err, decoded) {

        if (err) {
            _logger2.default.error(err);
            if (err.name === 'TokenExpiredError') {
                return res.status(401).send({ success: false, data: 'Auth token expired' });
            }
            if (err.name === 'JsonWebTokenError') {
                return res.status(401).send({ success: false, data: 'Invalid token' });
            }
            return res.status(401).send({ success: false, data: err.message });
        }
        console.log(decoded);
        req.decoded = decoded;
        next();
    });
};