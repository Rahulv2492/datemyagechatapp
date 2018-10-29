'use strict';

var _category = require('./../../models/category/category');

var _category2 = _interopRequireDefault(_category);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.getAllCategory = function () {
    return new Promise(function (resolve, reject) {
        _category2.default.findAll().then(function (result) {
            resolve(result);
        }).catch(function (err) {
            reject(err);
        });
    });
};