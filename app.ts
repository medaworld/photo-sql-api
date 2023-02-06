require('dotenv').config({ path: './.env' });
import express from 'express';
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin';
import { Image } from './models/image';
import { Subcategory } from './models/subcategory';
import { Category } from './models/category';
import sequelize from './util/database';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/admin', adminRoutes);

Image.belongsTo(Subcategory);
Image.belongsTo(Category);
Subcategory.hasMany(Image);
Subcategory.belongsTo(Category);
Category.hasMany(Subcategory);
Category.hasMany(Image);

sequelize
  .sync()
  .then((result: any) => {
    app.listen(8080);
  })
  .catch((err: any) => {});
