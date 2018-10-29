'use strict';

var _likesdb = require('./likesdb');

var _likesdb2 = _interopRequireDefault(_likesdb);

var _logger = require('./../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getAlllikedAlbum = function (req, res) {
    _likesdb2.default.getAlllikedAlbum().then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.getLikesExist = function (req, res) {
    _likesdb2.default.getLikesExist(req.query.subcategoryId).then(function (data) {
        return res.status(200).send({ success: true, data: data });
        // console.log(res.status(200).send({ data: data }));
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.getAllLikesId = function (req, res) {
    _likesdb2.default.getAllLikesId().then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.deleteLikesAlbum = function (req, res) {
    _likesdb2.default.deleteLikesAlbum(req.body.subcategoryId).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.addLikesAlbum = function (req, res) {
    var data = {
        subcategoryId: req.body.subcategoryId,
        userId: req.decoded.user.userId
    };
    _likesdb2.default.addLikesAlbum(data).then(function (data) {
        return res.status(200).send({ success: true, data: data });
    }).catch(function (err) {
        _logger2.default.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};