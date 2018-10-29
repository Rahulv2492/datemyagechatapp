'use strict';

var _userplaylist = require('./../../models/userplaylist/userplaylist');

var _userplaylist2 = _interopRequireDefault(_userplaylist);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

var _playlist = require('./../../models/playlist/playlist');

var _playlist2 = _interopRequireDefault(_playlist);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getUserPlaylistId = function () {
    return new Promise(function (resolve, reject) {
        _db2.default.query('SELECT playlistId FROM userplaylists', { type: _db2.default.QueryTypes.SELECT }).then(function (result) {
            // resolve(result)
            resolve(_lodash2.default.flattenDeep(result.map(_lodash2.default.values)));
        }).catch(function (err) {
            reject(err);
        });
    });
};
module.exports.getUserPlaylist = function (id) {
    return new Promise(function (resolve, reject) {
        _db2.default.query('select pl.*,pl.playlistId as isExistUserPlaylist from playlists pl\n        LEFT JOIN userplaylists upl \n        ON pl.playlistId=upl.playlistId\n        WHERE upl.categoryId=' + id + '\n        ', { type: _db2.default.QueryTypes.SELECT }).then(function (result) {

            resolve(result);
        }).catch(function (err) {
            reject(err);
        });

        // userplaylistModel.findAll({
        //     where: { categoryId: id },
        //     attributes: [],
        //     include: [{
        //         model: playlistModel,
        //     }]
        // }).then((result) => {
        //     resolve(result);
        // }).catch((err) => {
        //     reject(err);
        // })
    });
};

module.exports.deleteUserPlaylist = function (playlistId) {
    return new Promise(function (resolve, reject) {
        _userplaylist2.default.destroy({
            where: { playlistId: playlistId }
        }).then(function (result) {
            // playlistModel.update(
            //     { userCategoryId: false },
            //     { where: { playlistId: playlistId } }
            // ).then(result => {
            //     resolve(result);
            // }).catch((err) => {
            //     reject(err);
            // })
            resolve(result);
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
};

module.exports.addUserPlaylist = function (data) {
    console.log(data);
    return new Promise(function (resolve, reject) {
        _userplaylist2.default.create(data).then(function (result) {
            // playlistModel.update(
            //     { userCategoryId: true },
            //     {
            //         where: { playlistId: data.playlistId }
            //     }).then(result => {
            //         resolve(result);
            //     }).catch((err) => {
            //         reject(err);
            //     })
            resolve(result);
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
};