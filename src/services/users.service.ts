import jwt from '../utils/auth';
import usersModel from '../models/users.model';

const createUser = async (username: string, vocation: string, level: number, password: string) => {
  const user = await usersModel.createUser(username, vocation, level, password);

  return jwt.genToken(user);
};

export default {
  createUser,
};