'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('../../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import subcategoryModel from './../../models/subcategory/subcategory';

var playlistModel = _db2.default.define('playlist', {
    playlistId: { type: _sequelize2.default.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: _sequelize2.default.STRING, allowNull: false },
    subtitle: { type: _sequelize2.default.STRING, allowNull: true },
    thumbnail: { type: _sequelize2.default.STRING, allowNull: false },
    url: { type: _sequelize2.default.STRING, allowNull: false },
    subcategoryId: { type: _sequelize2.default.INTEGER },
    userCategoryId: { type: _sequelize2.default.BOOLEAN, allowNull: true, defaultValue: false }
});

// playlistModel.belongsTo(subcategoryModel, { foreignKey: 'subcategoryId' });


module.exports = playlistModel;