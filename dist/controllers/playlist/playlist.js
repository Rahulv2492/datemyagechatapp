'use strict';

var _playlistdb = require('./playlistdb');

var _playlistdb2 = _interopRequireDefault(_playlistdb);

var _logger = require('./../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getAllPlaylist = function (req, res) {
    _playlistdb2.default.getAllPlaylist().then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.getAllPlaylistById = function (req, res) {
    console.log(req.query.subcategoryId);
    _playlistdb2.default.getAllPlaylistById(req.query.subcategoryId).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.addPlaylist = function (req, res) {
    _playlistdb2.default.addPlaylist(req.body).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};