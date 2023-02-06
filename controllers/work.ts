import { Request, Response, NextFunction } from 'express';

export const getImages = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    photos: 'hi',
  });
};

export const getCategories = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    categories: 'hi',
  });
};

export const getSubcategories = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    subcategories: 'hi',
  });
};
