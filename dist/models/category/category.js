'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoryModel = _db2.default.define('category', {
    categoryId: { type: _sequelize2.default.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: _sequelize2.default.STRING, allowNull: false, unique: true }
});

module.exports = categoryModel;