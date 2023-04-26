import { RowDataPacket } from 'mysql2';
import { Users } from '../interface/Users';
import connection from './connection';

const findByUsername = async (username: string): Promise<Users | undefined> => {
  const [rows] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );

  const [userN] = rows;
  
  return userN as Users | undefined;
};

export default {
  findByUsername,
};