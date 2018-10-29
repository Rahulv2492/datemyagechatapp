import playlistdb from './playlistdb';
import logger from './../../utils/logger';

module.exports.getAllPlaylist = (req, res) => {
    playlistdb.getAllPlaylist().then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.getAllPlaylistById = (req, res) => {
    console.log(req.query.subcategoryId);
    playlistdb.getAllPlaylistById(req.query.subcategoryId).then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.addPlaylist = (req, res) => {
    playlistdb.addPlaylist(req.body)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            logger.error(err);
            return res.status(500).send({ success: false, data: err });
        });
};
