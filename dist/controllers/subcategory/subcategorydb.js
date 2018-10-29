'use strict';

var _subcategory = require('./../../models/subcategory/subcategory');

var _subcategory2 = _interopRequireDefault(_subcategory);

var _likes = require('./../../models/likes/likes');

var _likes2 = _interopRequireDefault(_likes);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

var _playlist = require('./../../models/playlist/playlist');

var _playlist2 = _interopRequireDefault(_playlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getAllSubcategory = function (categoryId) {
    return new Promise(function (resolve, reject) {
        _db2.default.query('select sub.* ,count(pl.playlistId) as songCount from subcategories sub LEFT JOIN playlists pl ON sub.subcategoryId=pl.subcategoryId where categoryId = ' + categoryId + ' GROUP BY sub.subcategoryId\n        ', { type: _db2.default.QueryTypes.SELECT }).then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
    });
};