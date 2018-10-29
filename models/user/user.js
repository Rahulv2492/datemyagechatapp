import Sequelize from 'sequelize';
import sequelize from '../../utils/db';

const user = sequelize.define('user', {
    userId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    name: { type: Sequelize.STRING, allowNull: true, defaultValue: false },
    email: { type: Sequelize.STRING, unique: true, allowNull: true, defaultValue: false },
    picture: { type: Sequelize.STRING },
    status: { type: Sequelize.BOOLEAN, defaultValue: false },
    DOB: { type: Sequelize.STRING, defaultValue: false },
    gender:{ type: Sequelize.STRING, defaultValue: false },
});

module.exports = user;
