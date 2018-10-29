import likesdb from './likesdb';
import logger from './../../utils/logger';

module.exports.getAlllikedAlbum = (req, res) => {
    likesdb.getAlllikedAlbum().then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.getLikesExist = (req, res) => {
    likesdb.getLikesExist(req.query.subcategoryId).then((data) => {
        return res.status(200).send({ success: true, data: data });
        // console.log(res.status(200).send({ data: data }));
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.getAllLikesId = (req, res) => {
    likesdb.getAllLikesId().then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.deleteLikesAlbum = (req, res) => {
    likesdb.deleteLikesAlbum(req.body.subcategoryId).then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.addLikesAlbum = (req, res) => {
    const data = {
        subcategoryId: req.body.subcategoryId,
        userId: req.decoded.user.userId
    }
    likesdb.addLikesAlbum(data).then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};
