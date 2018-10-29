import userdb from './userdb';
import logger from './../../utils/logger';


module.exports.addUserDetails = (req, res) => {

    userdb.addUserDetails(req.body)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            logger.error(err);
            return res.status(500).send({ success: false, data: err });
        });
};


module.exports.getAllUsers = (req, res) => {

    userdb.getAllUsers(req.query.email)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            logger.error(err);
            return res.status(500).send({ success: false, data: err });
        });
};