import Sequelize from 'sequelize';
import sequelize from './../../utils/db';
// import userplaylistCategoryModel from './../../models/userplaylistCategory/userplaylistCategory';
import playlistModel from './../../models/playlist/playlist';

const userplaylistModel = sequelize.define('userplaylist', {
    userPlaylistId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    playlistId: { type: Sequelize.INTEGER },
    categoryId: { type: Sequelize.INTEGER }
});

userplaylistModel.belongsTo(playlistModel, { foreignKey: 'playlistId',onDelete:'cascade' });
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
