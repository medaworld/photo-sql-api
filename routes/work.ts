import { Router } from 'express';
import {
  getCategories,
  getImages,
  getSubcategories,
} from '../controllers/work';

const router = Router();

router.get('/categories', getCategories);
router.get('/subcategories', getSubcategories);
router.get('images', getImages);
