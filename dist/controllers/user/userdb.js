'use strict';

var _user = require('./../../models/user/user');

var _user2 = _interopRequireDefault(_user);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.addUserDetails = function (userData) {
    console.log("fdssdfsdf", userData);
    return new Promise(function (resolve, reject) {

        _user2.default.findOrCreate({
            where: { email: userData.email },
            defaults: userData }).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
};

module.exports.getAllUsers = function (email) {
    return new Promise(function (resolve, reject) {
        _db2.default.query('SELECT * FROM users where email!=\'' + email + '\'', { type: _db2.default.QueryTypes.SELECT }).then(function (result) {
            resolve(result);
        }).catch(function (err) {
            reject(err);
        });
    });
};

// module.exports.updateUserDetails = (input) => {
//     return new Promise((resolve, reject) => {
//         return userModel.update(
//             input.body,
//             {
//                 where: { userId: input.decoded.user.userId }
//             }).then(result => {
//                 resolve(JSON.parse(result));
//             }).catch((err) => {
//                 reject(err);
//             })
//     });
// }

// module.exports.uploadProfilePicture = (data, userid) => {
//     return new Promise((resolve, reject) => {
//         return userModel.update(
//             data,
//             {
//                 where: { userId: userid }
//             }).then(result => {
//                 resolve(JSON.parse(result));
//             }).catch((err) => {
//                 reject(err);
//             })
//     });
// }