'use strict';

var _subcategorydb = require('./subcategorydb');

var _subcategorydb2 = _interopRequireDefault(_subcategorydb);

var _logger = require('./../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getAllSubcategory = function (req, res) {
    _subcategorydb2.default.getAllSubcategory(req.query.categoryId).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};