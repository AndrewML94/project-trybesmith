import { Router } from 'express';
import userController from '../controllers/users.controller';
import {
  validateUsername,
  validateUserVocation,
  validateUserLevel,
  validateUserPassword,
} from '../middleware/users.middlewares';

const routerUser = Router();

routerUser.post(
  '/', 
  validateUsername, 
  validateUserVocation,
  validateUserLevel, 
  validateUserPassword, 
  userController.createUser,
);

export default routerUser;