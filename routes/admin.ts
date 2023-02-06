import { Router } from 'express';

import { addPhoto, getPhotos } from '../controllers/images';

const router = Router();

router.get('/images', getPhotos);
router.post('/image', addPhoto);

export default router;
