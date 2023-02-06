import { Request, Response, NextFunction } from 'express';
import { Category } from '../models/category';
import { Image } from '../models/image';
import { Subcategory } from '../models/subcategory';

export const getImages = (req: Request, res: Response, next: NextFunction) => {
  const images = Image.findAll();
  res.status(200).json({
    images,
  });
};

export const addImage = (req: Request, res: Response, next: NextFunction) => {
  const imageUrl = req.body.imageUrl;
  const dateTaken = req.body.dateTaken;
  const description = req.body.description;
  const createdAt = new Date();
  const category = req.body.category;
  const subcategory = req.body.subcategory;
  Image.create({
    imageUrl: imageUrl,
    dateTaken: dateTaken,
    description: description,
  })
    .then((image: any) => {
      image.setCategory(category);
      image.setSubcategory(subcategory);
    })
    .catch((err: Error) => {
      console.log(err);
    });
};

export const addCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const createdAt = new Date();
  Category.create({
    title: title,
    imageUrl: imageUrl,
    createdAt: createdAt,
  });
};

export const addSubcategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const category = req.body.category;
  Subcategory.create({
    title: title,
    imageUrl: imageUrl,
  })
    .then((subcategory: any) => {
      subcategory.setCategory(category);
    })
    .catch((err: Error) => {
      console.log(err);
    });
};
