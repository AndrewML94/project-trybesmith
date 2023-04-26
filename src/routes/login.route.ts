import { Router } from 'express';
import loginController from '../controllers/login.controller';

const routerLogin = Router();

routerLogin.post('/', loginController.login);

export default routerLogin;