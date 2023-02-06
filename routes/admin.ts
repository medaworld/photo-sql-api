import { Router } from 'express';

import {
  addCategory,
  addImage,
  addSubcategory,
  getImages,
} from '../controllers/admin';

const router = Router();

router.get('/images', getImages);

router.post('/add-image', addImage);

router.post('/add-category', addCategory);

router.post('/add-subcategory', addSubcategory);

export default router;
