import sequelize from './../../utils/db';
import likesModel from './../../models/likes/likes';
import subcategoryModel from './../../models/subcategory/subcategory';
import playlistModel from './../../models/playlist/playlist';
import _ from 'lodash';

module.exports.getAlllikedAlbum = () => {
    return new Promise((resolve, reject) => {
        sequelize.query(`select sub.* ,count(pl.playlistid) as songCount from likes lk
            LEFT JOIN subcategories sub 
            ON sub.subcategoryId=lk.subcategoryId
            LEFT JOIN playlists pl
            ON sub.subcategoryId=pl.subcategoryId
            GROUP BY sub.subcategoryId
            `, { type: sequelize.QueryTypes.SELECT }).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
    });
};

module.exports.getLikesExist = (subcategoryId) => {
    return new Promise((resolve, reject) => {
        likesModel.findAll({
            where: { subcategoryId: subcategoryId }
        }).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        })
    });
};

module.exports.getAllLikesId = () => {
    return new Promise((resolve, reject) => {
        sequelize.query(`SELECT subcategoryId FROM likes`, { type: sequelize.QueryTypes.SELECT }).then((result) => {
            // resolve(result);
            resolve(_.flattenDeep(result.map(_.values)));
        }).catch((err) => {
            reject(err);
        })
    });
};


module.exports.deleteLikesAlbum = (subcategoryId) => {
    return new Promise((resolve, reject) => {
        likesModel.destroy({
            where: { subcategoryId: subcategoryId }
        }).then((result) => {
            resolve(result)
        }).catch((err) => {
            console.log(err)
            reject(err);
        });;
    });
};

module.exports.addLikesAlbum = (data) => {
    return new Promise((resolve, reject) => {
        likesModel.create(data).then((result) => {
            resolve(result);
        }).catch((err) => {
            console.log(err)
            reject(err);
        });
    });
};