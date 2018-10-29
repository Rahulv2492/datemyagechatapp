'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

var _user = require('./../../models/user/user');

var _user2 = _interopRequireDefault(_user);

var _userplaylist = require('./../../models/userplaylist/userplaylist');

var _userplaylist2 = _interopRequireDefault(_userplaylist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userPlaylistcategoryModel = _db2.default.define('userplaylistcategory', {
    categoryId: { type: _sequelize2.default.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: _sequelize2.default.STRING, allowNull: false, unique: true },
    userId: { type: _sequelize2.default.CHAR }
});

userPlaylistcategoryModel.hasMany(_userplaylist2.default, { foreignKey: 'categoryId', onDelete: 'cascade', hooks: true });

module.exports = userPlaylistcategoryModel;