import { RowDataPacket } from 'mysql2';
import { Orders } from '../interface/Orders';
import connection from './connection';

const getAllOrders = async (): Promise<Orders[]> => {
  const [orders] = await connection.execute<RowDataPacket[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders orders
    INNER JOIN Trybesmith.users AS users
    ON orders.user_id = users.id
    INNER JOIN Trybesmith.products AS products
    ON orders.id = products.order_id
    GROUP BY orders.id`,
  );

  return orders as Orders[];
};

export default {
  getAllOrders,
};