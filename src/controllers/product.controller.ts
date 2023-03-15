import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import productService from '../services/product.service';

const getAll = async (_req: Request, res: Response) => {
  const product = await productService.getAll();
  return res.status(200).json(product);
};

const createProduct = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const newProduct = await productService.createProduct(product);
  return res.status(201).json(newProduct);
};

const productController = {
  getAll,
  createProduct,
};

export default productController;