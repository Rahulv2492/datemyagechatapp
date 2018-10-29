import Sequelize from 'sequelize';
import sequelize from './../../utils/db';
import categoryModel from './../category/category';
import playlistModel from './../playlist/playlist';
// import likesModel from './../likes/likes';

const subcategoryModel = sequelize.define('subcategory', {
    subcategoryId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, unique: true },
    description: { type: Sequelize.STRING, allowNull: false },
    img: { type: Sequelize.STRING, allowNull: false },
    largImg: { type: Sequelize.STRING, allowNull: false },
    categoryId: { type: Sequelize.INTEGER }
});

subcategoryModel.belongsTo(categoryModel, { foreignKey: 'categoryId' });
subcategoryModel.hasMany(playlistModel, { foreignKey: 'subcategoryId' });



module.exports = subcategoryModel;
