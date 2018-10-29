import Sequelize from 'sequelize';
import sequelize from '../../utils/db';
// import subcategoryModel from './../../models/subcategory/subcategory';

const playlistModel = sequelize.define('playlist', {
    playlistId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false, },
    subtitle: { type: Sequelize.STRING, allowNull: true, },
    thumbnail: { type: Sequelize.STRING, allowNull: false },
    url: { type: Sequelize.STRING, allowNull: false },
    subcategoryId: { type: Sequelize.INTEGER },
    userCategoryId: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false },
});

// playlistModel.belongsTo(subcategoryModel, { foreignKey: 'subcategoryId' });


module.exports = playlistModel;