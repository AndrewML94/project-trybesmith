import jwt from '../utils/auth';
import loginModel from '../models/login.model';

const login = async (username: string, password: string): Promise<string> => {
  const user = await loginModel.findByUsername(username);
  
  if (!user || password !== user.password) {
    throw new Error('UNAUTHORIZED');
  }

  return jwt.genToken({ username });
};

export default {
  login,
};