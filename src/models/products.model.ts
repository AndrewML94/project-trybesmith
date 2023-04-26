import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Products } from '../interface/Products';
import connection from './connection';

const createProduct = async (name: string, amount: string): Promise<Products> => {
  const [row] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const product = {
    id: row.insertId,
    name,
    amount,
  };

  return product as Products;
};

const getAllProducts = async (): Promise<Products[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return rows as Products[];
};

export default {
  createProduct,
  getAllProducts,
};