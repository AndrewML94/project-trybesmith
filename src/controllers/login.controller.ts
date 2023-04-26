import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (!password || typeof password !== 'string') {
    return res.status(400).json({ message: '"password" is required' });
  }

  const token = await loginService.login(username, password);

  return res.status(200).json({ token });
};

export default {
  login,
};