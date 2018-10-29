import Sequelize from 'sequelize';
import sequelize from './../../utils/db';
import subcategoryModel from './../subcategory/subcategory';

const likesModel = sequelize.define('likes', {
    likesId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    subcategoryId: { type: Sequelize.INTEGER },
    userId: { type: Sequelize.CHAR }
});

likesModel.belongsTo(subcategoryModel, { foreignKey: 'subcategoryId' });
module.exports = likesModel;