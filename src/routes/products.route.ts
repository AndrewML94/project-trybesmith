import { Router } from 'express';
import productController from '../controllers/products.controller';

const routerProduct = Router();

routerProduct.post('/', productController.createProduct);
routerProduct.get('/', productController.getAllProducts);

export default routerProduct;