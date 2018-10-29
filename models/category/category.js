import Sequelize from 'sequelize';
import sequelize from './../../utils/db';

const categoryModel = sequelize.define('category', {
    categoryId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, unique: true }
});

module.exports = categoryModel;
