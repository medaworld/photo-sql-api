import Sequelize from 'sequelize';
import sequelize from '../util/database';

export const Image = sequelize.define('image', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  subcategory: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateTaken: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE,
  },
});
