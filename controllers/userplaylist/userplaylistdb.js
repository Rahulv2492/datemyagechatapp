import userplaylistModel from './../../models/userplaylist/userplaylist';
import sequelize from './../../utils/db';
import playlistModel from './../../models/playlist/playlist';
import _ from 'lodash';
module.exports.getUserPlaylistId = () => {
    return new Promise((resolve, reject) => {
        sequelize.query(`SELECT playlistId FROM userplaylists`, { type: sequelize.QueryTypes.SELECT }).then((result) => {
            // resolve(result)
            resolve(_.flattenDeep(result.map(_.values)));
        }).catch((err) => {
            reject(err);
        })
    });
};
module.exports.getUserPlaylist = (id) => {
    return new Promise((resolve, reject) => {
        sequelize.query(`select pl.*,pl.playlistId as isExistUserPlaylist from playlists pl
        LEFT JOIN userplaylists upl 
        ON pl.playlistId=upl.playlistId
        WHERE upl.categoryId=${id}
        `, { type: sequelize.QueryTypes.SELECT }).then((result) => {

                resolve(result);
            }).catch((err) => {
                reject(err);
            })

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

module.exports.deleteUserPlaylist = (playlistId) => {
    return new Promise((resolve, reject) => {
        userplaylistModel.destroy({
            where: { playlistId: playlistId }
        }).then((result) => {
            // playlistModel.update(
            //     { userCategoryId: false },
            //     { where: { playlistId: playlistId } }
            // ).then(result => {
            //     resolve(result);
            // }).catch((err) => {
            //     reject(err);
            // })
            resolve(result);
        }).catch((err) => {
            console.log(err)
            reject(err);
        });
    });
};

module.exports.addUserPlaylist = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        userplaylistModel.create(data).then((result) => {
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
        }).catch((err) => {
            console.log(err)
            reject(err);
        });
    });
};