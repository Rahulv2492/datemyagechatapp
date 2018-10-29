import Sequelize from 'sequelize';
import sequelize from './../../utils/db';
import userModel from './../../models/user/user';
import userplaylistModel from './../../models/userplaylist/userplaylist';

const userPlaylistcategoryModel = sequelize.define('userplaylistcategory', {
    categoryId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, unique: true },
    userId: { type: Sequelize.CHAR }
});

userPlaylistcategoryModel.hasMany(userplaylistModel, { foreignKey: 'categoryId', onDelete: 'cascade', hooks: true });

module.exports = userPlaylistcategoryModel;
