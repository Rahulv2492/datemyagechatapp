'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

var _subcategory = require('./../subcategory/subcategory');

var _subcategory2 = _interopRequireDefault(_subcategory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var likesModel = _db2.default.define('likes', {
    likesId: { type: _sequelize2.default.INTEGER, autoIncrement: true, primaryKey: true },
    subcategoryId: { type: _sequelize2.default.INTEGER },
    userId: { type: _sequelize2.default.CHAR }
});

likesModel.belongsTo(_subcategory2.default, { foreignKey: 'subcategoryId' });
module.exports = likesModel;