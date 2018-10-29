import userplaylistCategoryModel from './../../models/userplaylistCategory/userplaylistCategory';
import sequelize from './../../utils/db';
import userplaylistModel from './../../models/userplaylist/userplaylist';
import Sequelize from 'sequelize';

module.exports.getUserPlaylistCategory = (userId) => {
    return new Promise((resolve, reject) => {
        sequelize.query(`select sub.* ,count(pl.playlistId) as songCount from userplaylistcategories sub LEFT JOIN userplaylists pl ON sub.categoryId=pl.categoryId
        where sub.userId = '${userId}' GROUP BY sub.categoryId`, {
                type: sequelize.QueryTypes.SELECT
            })
            .then((res) => {
                return sequelize.Promise.map(res, function (list) {
                    let listSql = `select thumbnail from playlists pl JOIN userplaylists ul ON pl.playlistId=ul.playlistId where ul.categoryId=${list.categoryId} LIMIT 4`;
                    return sequelize.query(listSql, {
                        type: sequelize.QueryTypes.SELECT
                    })
                        .then(function (listRes) {
                            list.playList = listRes
                        });
                })
                    .then(() => {
                        resolve(res);
                    });
            })
            .catch((err) => {
                reject(err);
            })
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

module.exports.addUserPlaylistCategory = (data) => {
    console.log(data.userId);
    return new Promise((resolve, reject) => {
        userplaylistCategoryModel.create(data).then((result) => {
            userplaylistCategoryModel.findAll({
                where: { userId: data.userId },
                required: true,
                attributes: {
                    required: true,
                    include: [[Sequelize.fn("COUNT", Sequelize.col("userplaylists.userPlaylistId")), "songCount"]],
                },
                include: [{
                    model: userplaylistModel, attributes: []
                }],
                group: ['userplaylistcategory.categoryId']
            }).then((result) => {
                result.forEach(element => {
                    if (element.categoryId !== null) {
                        resolve(result);
                    } else {
                        resolve([]);
                    }
                });
            })
        }).catch((err) => {
            console.log(err)
            reject(err);
        });
    });
};
module.exports.deleteUserPlaylistCategory = (id) => {
    return new Promise((resolve, reject) => {
        userplaylistCategoryModel.destroy({
            where: { categoryId: id }
        }).then((result) => {
            resolve(result);
        }).catch((err) => {
            console.log(err)
            reject(err);
        });
    });
};
module.exports.updateUserPlaylistCategory = (data) => {
    return new Promise((resolve, reject) => {
        userplaylistCategoryModel.update(data, {
            where: { categoryId: data.categoryId }
        }).then((result) => {
            resolve(JSON.parse(result));
        }).catch((err) => {
            console.log(err)
            reject(err);
        });
    });
};