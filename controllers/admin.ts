import { Request, Response, NextFunction } from 'express';

export const getPhotos = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    photos: 'hi',
  });
};

export const addPhoto = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    photos: 'hi',
  });
};
