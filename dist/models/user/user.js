'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('../../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = _db2.default.define('user', {
    userId: { type: _sequelize2.default.UUID, primaryKey: true, defaultValue: _sequelize2.default.UUIDV4 },
    name: { type: _sequelize2.default.STRING, allowNull: true, defaultValue: false },
    email: { type: _sequelize2.default.STRING, unique: true, allowNull: true, defaultValue: false },
    picture: { type: _sequelize2.default.STRING },
    status: { type: _sequelize2.default.BOOLEAN, defaultValue: false },
    DOB: { type: _sequelize2.default.STRING, defaultValue: false },
    gender: { type: _sequelize2.default.STRING, defaultValue: false }
});

module.exports = user;