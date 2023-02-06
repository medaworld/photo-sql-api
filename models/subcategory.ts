import Sequelize from 'sequelize';
import sequelize from '../util/database';

export const Subcategory = sequelize.define('subcategory', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // category: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
});
