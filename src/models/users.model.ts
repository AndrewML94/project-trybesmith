import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Users } from '../interface/Users';

const createUser = async (username: string, vocation: string, level: number, password: string):
Promise<Users> => {
  const [row] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  const user = {
    id: row.insertId,
    username,
    vocation,
    level,
    password,
  };

  return user as Users;
};

export default {
  createUser,
};