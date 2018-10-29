import jwt from 'jsonwebtoken';
import config from '../config/config';
import logger from '../utils/logger';

module.exports.ensureAuth = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({ success: false, data: 'Auth headers required' });
    }
    let token = req.headers.authorization;
    jwt.verify(token, config.SECRET, function (err, decoded) {

        if (err) {
            logger.error(err);
            if (err.name === 'TokenExpiredError') {
                return res.status(401).send({ success: false, data: 'Auth token expired' });
            }
            if (err.name === 'JsonWebTokenError') {
                return res.status(401).send({ success: false, data: 'Invalid token' });
            }
            return res.status(401).send({ success: false, data: err.message });
        }
        console.log(decoded);
        req.decoded = decoded;
        next();
    });
}
