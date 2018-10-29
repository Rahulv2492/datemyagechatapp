'use strict';

var _categorydb = require('./categorydb');

var _categorydb2 = _interopRequireDefault(_categorydb);

var _logger = require('./../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getAllCategory = function (req, res) {
    _categorydb2.default.getAllCategory().then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};