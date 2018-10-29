'use strict';

var _userPlaylistcategorydb = require('./userPlaylistcategorydb');

var _userPlaylistcategorydb2 = _interopRequireDefault(_userPlaylistcategorydb);

var _logger = require('./../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getUserPlaylistCategory = function (req, res) {
    _userPlaylistcategorydb2.default.getUserPlaylistCategory(req.decoded.user.userId).then(function (data) {
        // console.log(data);
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.addUserPlaylistCategory = function (req, res) {
    var data = {
        name: req.body.name,
        userId: req.decoded.user.userId
    };
    _userPlaylistcategorydb2.default.addUserPlaylistCategory(data).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err.errors[0].message });
    });
};
module.exports.deleteUserPlaylistCategory = function (req, res) {
    _userPlaylistcategorydb2.default.deleteUserPlaylistCategory(req.body.categoryId).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.updateUserPlaylistCategory = function (req, res) {
    _userPlaylistcategorydb2.default.updateUserPlaylistCategory(req.body).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};