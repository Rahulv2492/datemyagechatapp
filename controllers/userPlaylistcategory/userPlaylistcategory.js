import userPlaylistcategorydb from './userPlaylistcategorydb';
import logger from './../../utils/logger';


module.exports.getUserPlaylistCategory = (req, res) => {
    userPlaylistcategorydb.getUserPlaylistCategory(req.decoded.user.userId).then((data) => {
        // console.log(data);
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        return res.status(500).send({ success: false, data: err });
    });
};
module.exports.addUserPlaylistCategory = (req, res) => {
    let data = {
        name: req.body.name,
        userId: req.decoded.user.userId
    }
    userPlaylistcategorydb.addUserPlaylistCategory(data).then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err.errors[0].message });
    });
};
module.exports.deleteUserPlaylistCategory = (req, res) => {
    userPlaylistcategorydb.deleteUserPlaylistCategory(req.body.categoryId).then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

module.exports.updateUserPlaylistCategory = (req, res) => {
    userPlaylistcategorydb.updateUserPlaylistCategory(req.body).then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

