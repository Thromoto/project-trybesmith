import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const createProduct = async (product: IProduct) => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};

const productService = {
  getAll,
  createProduct,
};

export default productService;