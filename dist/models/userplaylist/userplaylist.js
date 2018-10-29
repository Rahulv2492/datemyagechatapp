'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('./../../utils/db');

var _db2 = _interopRequireDefault(_db);

var _playlist = require('./../../models/playlist/playlist');

var _playlist2 = _interopRequireDefault(_playlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userplaylistModel = _db2.default.define('userplaylist', {
    userPlaylistId: { type: _sequelize2.default.INTEGER, autoIncrement: true, primaryKey: true },
    playlistId: { type: _sequelize2.default.INTEGER },
    categoryId: { type: _sequelize2.default.INTEGER }
});
// import userplaylistCategoryModel from './../../models/userplaylistCategory/userplaylistCategory';


userplaylistModel.belongsTo(_playlist2.default, { foreignKey: 'playlistId', onDelete: 'cascade' });
// userplaylistModel.belongsTo(userplaylistCategoryModel, { foreignKey: 'categoryId' });


// module.exports = function (sequelize, DataTypes) {
//     var Product = sequelize.define('Product', {
//         name: DataTypes.STRING
//     }, {
//             associate: function (models) {
//                 Product.belongsTo(models.Category);
//             }
//         });
//     return Product
// }

module.exports = userplaylistModel;