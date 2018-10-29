import userplaylistdb from './userplaylistdb';
import logger from './../../utils/logger';

module.exports.getUserPlaylistId = (req, res) => {
    userplaylistdb.getUserPlaylistId().then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
}
module.exports.getUserPlaylist = (req, res) => {
    userplaylistdb.getUserPlaylist(req.query.categoryId).then((data) => {
        // console.log(data['userplaylist']);
        return res.status(200).send({ success: true, data: data });
        // console.log(res.status(200).send({ data: data }));
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.deleteUserPlaylist = (req, res) => {
    userplaylistdb.deleteUserPlaylist(req.body.playlistId).then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.addUserPlaylist = (req, res) => {
    userplaylistdb.addUserPlaylist(req.body).then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
