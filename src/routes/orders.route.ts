import { Router } from 'express';
import orderController from '../controllers/orders.controller';

const routerOrder = Router();

routerOrder.get('/', orderController.getAllOrders);

export default routerOrder;