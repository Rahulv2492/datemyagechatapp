import { networkInterfaces } from 'os';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import logger from '../../utils/logger';
import config from '../../config/config';
import userModel from '../../models/user/user';

module.exports.validateUIP = (req, res) => {
    // let input = req.query.uid;
    // let partner = config.SAMMEDIA_Partner;
    // if (!input) {
    //     return res.status(200).send({ success: false, data: 'Access Denied' });
    // }
    // let uid = config.SAMMEDIA_FreeUID;
    if (uid === input) {
        checkUserAndCreateToken(input)
            .then((tokenResp) => {
                return res.status(200).send({ success: true, data: { 'token': tokenResp } });
            })
            .catch((err) => {
                return res.status(200).send({ success: false, data: err });
            });
    }
    else {
        axios.get(`https://eu-api.sam-media.com/api/v1/subscription/validate-access-token/${partner}?accessToken=${input}`)
            .then((resp) => {

                if (resp.data.status == '1') {
                    checkUserAndCreateToken(input)
                        .then((tokenResp) => {
                            return res.status(200).send({ success: true, data: { 'token': tokenResp } });
                        })
                        .catch((err) => {
                            logger.error(err);
                            return res.status(200).send({ success: false, data: err });
                        });

                }
                else if (resp.data.status === '-1') {
                    return res.status(200).send({ success: false, data: 'Not subscribed' });
                }
                else if (resp.data.status === '0') {
                    return res.status(200).send({ success: false, data: 'Inactive subscriber' });
                }
                else {
                    return res.status(200).send({ success: false, data: '' });
                }
            }).catch(err => {
                logger.error(err);
                return res.status(200).send({ success: false, data: err });
            })
    }
}

var createToken = (uid, data) => {
    let payload = {
        sub: data.userId,
        user: data,
        uid: uid,
        iat: Math.floor(Date.now() / 1000) - 30,
        exp: Math.floor(Date.now() / 1000) + 86400000
    };
    return { userId: data.userId, token: jwt.sign(payload, config.SECRET) }
}

var inserUid = (uid) => {
    return new Promise((resolve, reject) => {
        userModel.create({ uid: uid, timeZone: "+5:30", role: "user" })
            .then((data) => {
                data = data.get({ plain: true });
                resolve({ data: data });
            })
            .catch((err) => {
                reject(err);
            })
    });
}

var isUidExists = (uid) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({
            where: {
                'uid': uid, 'isDeleted': false, 'isActive': true
            },
            attributes: ['userId', 'name', 'email', 'profilePic', 'address', 'accountType', 'timeZone'],
            raw: false
        })
            .then((result) => {
                if (!result) {
                    return resolve({ exist: false });
                }
                let data = result.toJSON();
                resolve({ exist: true, data: data });
            })
            .catch((err) => {
                reject(err)
            });
    });
}

var checkUserAndCreateToken = (uid) => {
    return new Promise((resolve, reject) => {
        isUidExists(uid)
            .then((result) => {
                if (result.exist) {
                    return result.data;
                } else {
                    return inserUid(uid);
                }
            })
            .then((data) => {
                return createToken(uid, data);
            })
            .then((token) => {
                resolve(token);
            })
            .catch((err) => {
                reject(err);
            });
    });
}