import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IProduct, Product } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute<Product[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products;
    `);
  return rows;
};

const createProduct = async (product: IProduct): Promise<Product> => {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { ...product, id };
  return newProduct;
};

const productModel = {
  getAll,
  createProduct,
};

export default productModel;