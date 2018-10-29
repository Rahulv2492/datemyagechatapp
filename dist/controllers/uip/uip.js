'use strict';

var _os = require('os');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

var _user = require('../../models/user/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.validateUIP = function (req, res) {
    // let input = req.query.uid;
    // let partner = config.SAMMEDIA_Partner;
    // if (!input) {
    //     return res.status(200).send({ success: false, data: 'Access Denied' });
    // }
    // let uid = config.SAMMEDIA_FreeUID;
    if (uid === input) {
        checkUserAndCreateToken(input).then(function (tokenResp) {
            return res.status(200).send({ success: true, data: { 'token': tokenResp } });
        }).catch(function (err) {
            return res.status(200).send({ success: false, data: err });
        });
    } else {
        _axios2.default.get('https://eu-api.sam-media.com/api/v1/subscription/validate-access-token/' + partner + '?accessToken=' + input).then(function (resp) {

            if (resp.data.status == '1') {
                checkUserAndCreateToken(input).then(function (tokenResp) {
                    return res.status(200).send({ success: true, data: { 'token': tokenResp } });
                }).catch(function (err) {
                    _logger2.default.error(err);
                    return res.status(200).send({ success: false, data: err });
                });
            } else if (resp.data.status === '-1') {
                return res.status(200).send({ success: false, data: 'Not subscribed' });
            } else if (resp.data.status === '0') {
                return res.status(200).send({ success: false, data: 'Inactive subscriber' });
            } else {
                return res.status(200).send({ success: false, data: '' });
            }
        }).catch(function (err) {
            _logger2.default.error(err);
            return res.status(200).send({ success: false, data: err });
        });
    }
};

var createToken = function createToken(uid, data) {
    var payload = {
        sub: data.userId,
        user: data,
        uid: uid,
        iat: Math.floor(Date.now() / 1000) - 30,
        exp: Math.floor(Date.now() / 1000) + 86400000
    };
    return { userId: data.userId, token: _jsonwebtoken2.default.sign(payload, _config2.default.SECRET) };
};

var inserUid = function inserUid(uid) {
    return new Promise(function (resolve, reject) {
        _user2.default.create({ uid: uid, timeZone: "+5:30", role: "user" }).then(function (data) {
            data = data.get({ plain: true });
            resolve({ data: data });
        }).catch(function (err) {
            reject(err);
        });
    });
};

var isUidExists = function isUidExists(uid) {
    return new Promise(function (resolve, reject) {
        _user2.default.findOne({
            where: {
                'uid': uid, 'isDeleted': false, 'isActive': true
            },
            attributes: ['userId', 'name', 'email', 'profilePic', 'address', 'accountType', 'timeZone'],
            raw: false
        }).then(function (result) {
            if (!result) {
                return resolve({ exist: false });
            }
            var data = result.toJSON();
            resolve({ exist: true, data: data });
        }).catch(function (err) {
            reject(err);
        });
    });
};

var checkUserAndCreateToken = function checkUserAndCreateToken(uid) {
    return new Promise(function (resolve, reject) {
        isUidExists(uid).then(function (result) {
            if (result.exist) {
                return result.data;
            } else {
                return inserUid(uid);
            }
        }).then(function (data) {
            return createToken(uid, data);
        }).then(function (token) {
            resolve(token);
        }).catch(function (err) {
            reject(err);
        });
    });
};