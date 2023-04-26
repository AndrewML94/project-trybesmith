import { Request, Response } from 'express';
import usersService from '../services/users.service';

const createUser = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;

  const token = await usersService.createUser(username, vocation, level, password);

  return res.status(201).json({ token });
};

export default {
  createUser,
};