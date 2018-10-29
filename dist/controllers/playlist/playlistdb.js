'use strict';

var _playlist = require('./../../models/playlist/playlist');

var _playlist2 = _interopRequireDefault(_playlist);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

var _userplaylist = require('./../../models/userplaylist/userplaylist');

var _userplaylist2 = _interopRequireDefault(_userplaylist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getAllPlaylist = function () {
    return new Promise(function (resolve, reject) {
        _db2.default.query('SELECT pl.*, \n        (SELECT userplaylistId from userplaylists where playlistId=pl.playlistId ) as isExistUserPlaylist \n        FROM playlists pl', { type: _db2.default.QueryTypes.SELECT }).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            reject(err);
        });
        // playlistModel.findAll().then((result) => {
        //     resolve(result);
        // }).catch((err) => {
        //     reject(err);
        // })
    });
};
module.exports.getAllPlaylistById = function (subcategoryId) {
    return new Promise(function (resolve, reject) {
        _db2.default.query('SELECT pl.* FROM playlists pl WHERE pl.subcategoryId=' + subcategoryId, { type: _db2.default.QueryTypes.SELECT }).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            reject(err);
        });

        // playlistModel.findAll({
        //     where: { subcategoryId: subcategoryId },
        // }).then((result) => {
        //     resolve(result);
        // }).catch((err) => {
        //     reject(err);
        // })
    });
};
module.exports.addPlaylist = function (input) {
    return new Promise(function (resolve, reject) {
        _playlist2.default.bulkCreate(input).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
};