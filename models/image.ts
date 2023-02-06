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
  },
  // category: {
  //   type: Sequelize.STRING,
  // },
  // subcategory: {
  //   type: Sequelize.STRING,
  // },
  dateTaken: {
    type: Sequelize.DATE,
  },
  description: {
    type: Sequelize.STRING,
  },
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE,
  },
});
