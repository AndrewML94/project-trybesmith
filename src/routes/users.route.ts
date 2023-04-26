import { Router } from 'express';
import userController from '../controllers/users.controller';

const routerUser = Router();

routerUser.post('/', userController.createUser);

export default routerUser;