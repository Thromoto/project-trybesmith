import { RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products;
    `);
  return rows;
};

const productModel = {
  getAll,
};

export default productModel;