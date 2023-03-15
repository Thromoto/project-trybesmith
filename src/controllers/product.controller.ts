import { Request, Response } from 'express';
import productService from '../services/product.service';

const getAll = async (_req: Request, res: Response) => {
  const product = await productService.getAll();
  return res.status(200).json(product);
};

const productController = {
  getAll,
};

export default productController;