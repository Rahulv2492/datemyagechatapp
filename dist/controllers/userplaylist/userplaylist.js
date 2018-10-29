'use strict';

var _userplaylistdb = require('./userplaylistdb');

var _userplaylistdb2 = _interopRequireDefault(_userplaylistdb);

var _logger = require('./../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getUserPlaylistId = function (req, res) {
    _userplaylistdb2.default.getUserPlaylistId().then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.getUserPlaylist = function (req, res) {
    _userplaylistdb2.default.getUserPlaylist(req.query.categoryId).then(function (data) {
        // console.log(data['userplaylist']);
        return res.status(200).send({ success: true, data: data });
        // console.log(res.status(200).send({ data: data }));
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.deleteUserPlaylist = function (req, res) {
    _userplaylistdb2.default.deleteUserPlaylist(req.body.playlistId).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.addUserPlaylist = function (req, res) {
    _userplaylistdb2.default.addUserPlaylist(req.body).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};