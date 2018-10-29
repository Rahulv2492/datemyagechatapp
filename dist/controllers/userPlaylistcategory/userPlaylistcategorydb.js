'use strict';

var _userplaylistCategory = require('./../../models/userplaylistCategory/userplaylistCategory');

var _userplaylistCategory2 = _interopRequireDefault(_userplaylistCategory);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

var _userplaylist = require('./../../models/userplaylist/userplaylist');

var _userplaylist2 = _interopRequireDefault(_userplaylist);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getUserPlaylistCategory = function (userId) {
    return new Promise(function (resolve, reject) {
        _db2.default.query('select sub.* ,count(pl.playlistId) as songCount from userplaylistcategories sub LEFT JOIN userplaylists pl ON sub.categoryId=pl.categoryId\n        where sub.userId = \'' + userId + '\' GROUP BY sub.categoryId', {
            type: _db2.default.QueryTypes.SELECT
        }).then(function (res) {
            return _db2.default.Promise.map(res, function (list) {
                var listSql = 'select thumbnail from playlists pl JOIN userplaylists ul ON pl.playlistId=ul.playlistId where ul.categoryId=' + list.categoryId + ' LIMIT 4';
                return _db2.default.query(listSql, {
                    type: _db2.default.QueryTypes.SELECT
                }).then(function (listRes) {
                    list.playList = listRes;
                });
            }).then(function () {
                resolve(res);
            });
        }).catch(function (err) {
            reject(err);
        });
        // userplaylistCategoryModel.findAll({
        //     where: { userId: userId },
        //     attributes: {
        //         required: true,
        //         include: [[Sequelize.fn("COUNT", Sequelize.col("userplaylists.userPlaylistId")), "songCount"]],
        //     },
        //     include: [{
        //         model: userplaylistModel, attributes: []
        //     }],
        //     group: ['userplaylistcategory.categoryId']
        // }).then((result) => {

        //     result.forEach(element => {
        //         if (element.categoryId !== null) {
        //             resolve(result);
        //         } else {
        //             resolve([]);
        //         }
        //     });

        // }).catch((err) => {
        //     reject(err);
        // });

        // userplaylistCategoryModel.findAll({
        //     where: {
        //         userId: userId
        //     }
        // }).then((result) => {
        //     resolve(result);
        // }).catch((err) => {
        //     reject(err);
        // })
    });
};

module.exports.addUserPlaylistCategory = function (data) {
    console.log(data.userId);
    return new Promise(function (resolve, reject) {
        _userplaylistCategory2.default.create(data).then(function (result) {
            _userplaylistCategory2.default.findAll({
                where: { userId: data.userId },
                required: true,
                attributes: {
                    required: true,
                    include: [[_sequelize2.default.fn("COUNT", _sequelize2.default.col("userplaylists.userPlaylistId")), "songCount"]]
                },
                include: [{
                    model: _userplaylist2.default, attributes: []
                }],
                group: ['userplaylistcategory.categoryId']
            }).then(function (result) {
                result.forEach(function (element) {
                    if (element.categoryId !== null) {
                        resolve(result);
                    } else {
                        resolve([]);
                    }
                });
            });
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
};
module.exports.deleteUserPlaylistCategory = function (id) {
    return new Promise(function (resolve, reject) {
        _userplaylistCategory2.default.destroy({
            where: { categoryId: id }
        }).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
};
module.exports.updateUserPlaylistCategory = function (data) {
    return new Promise(function (resolve, reject) {
        _userplaylistCategory2.default.update(data, {
            where: { categoryId: data.categoryId }
        }).then(function (result) {
            resolve(JSON.parse(result));
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
};