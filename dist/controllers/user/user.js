'use strict';

var _userdb = require('./userdb');

var _userdb2 = _interopRequireDefault(_userdb);

var _logger = require('./../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.addUserDetails = function (req, res) {

    _userdb2.default.addUserDetails(req.body).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.getAllUsers = function (req, res) {

    _userdb2.default.getAllUsers(req.query.email).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};