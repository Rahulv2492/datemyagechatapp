'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

var _category = require('./../category/category');

var _category2 = _interopRequireDefault(_category);

var _playlist = require('./../playlist/playlist');

var _playlist2 = _interopRequireDefault(_playlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import likesModel from './../likes/likes';

var subcategoryModel = _db2.default.define('subcategory', {
    subcategoryId: { type: _sequelize2.default.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: _sequelize2.default.STRING, allowNull: false, unique: true },
    description: { type: _sequelize2.default.STRING, allowNull: false },
    img: { type: _sequelize2.default.STRING, allowNull: false },
    largImg: { type: _sequelize2.default.STRING, allowNull: false },
    categoryId: { type: _sequelize2.default.INTEGER }
});

subcategoryModel.belongsTo(_category2.default, { foreignKey: 'categoryId' });
subcategoryModel.hasMany(_playlist2.default, { foreignKey: 'subcategoryId' });

module.exports = subcategoryModel;