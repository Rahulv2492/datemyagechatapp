'use strict';

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

var _likes = require('./../../models/likes/likes');

var _likes2 = _interopRequireDefault(_likes);

var _subcategory = require('./../../models/subcategory/subcategory');

var _subcategory2 = _interopRequireDefault(_subcategory);

var _playlist = require('./../../models/playlist/playlist');

var _playlist2 = _interopRequireDefault(_playlist);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getAlllikedAlbum = function () {
    return new Promise(function (resolve, reject) {
        _db2.default.query('select sub.* ,count(pl.playlistid) as songCount from likes lk\n            LEFT JOIN subcategories sub \n            ON sub.subcategoryId=lk.subcategoryId\n            LEFT JOIN playlists pl\n            ON sub.subcategoryId=pl.subcategoryId\n            GROUP BY sub.subcategoryId\n            ', { type: _db2.default.QueryTypes.SELECT }).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            reject(err);
        });
    });
};

module.exports.getLikesExist = function (subcategoryId) {
    return new Promise(function (resolve, reject) {
        _likes2.default.findAll({
            where: { subcategoryId: subcategoryId }
        }).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            reject(err);
        });
    });
};

module.exports.getAllLikesId = function () {
    return new Promise(function (resolve, reject) {
        _db2.default.query('SELECT subcategoryId FROM likes', { type: _db2.default.QueryTypes.SELECT }).then(function (result) {
            // resolve(result);
            resolve(_lodash2.default.flattenDeep(result.map(_lodash2.default.values)));
        }).catch(function (err) {
            reject(err);
        });
    });
};

module.exports.deleteLikesAlbum = function (subcategoryId) {
    return new Promise(function (resolve, reject) {
        _likes2.default.destroy({
            where: { subcategoryId: subcategoryId }
        }).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });;
    });
};

module.exports.addLikesAlbum = function (data) {
    return new Promise(function (resolve, reject) {
        _likes2.default.create(data).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
};