import subcategoryModel from './../../models/subcategory/subcategory';
import likesModel from './../../models/likes/likes';
import sequelize from './../../utils/db';
import playlistModel from './../../models/playlist/playlist';

module.exports.getAllSubcategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        sequelize.query(`select sub.* ,count(pl.playlistId) as songCount from subcategories sub LEFT JOIN playlists pl ON sub.subcategoryId=pl.subcategoryId where categoryId = ${categoryId} GROUP BY sub.subcategoryId
        `, { type: sequelize.QueryTypes.SELECT })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    });
};