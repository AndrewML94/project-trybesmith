import { Router } from 'express';
import productController from '../controllers/products.controller';
import { validateProdName, validateProdAmount } from '../middleware/products.middlewares';

const routerProduct = Router();

routerProduct.post('/', validateProdName, validateProdAmount, productController.createProduct);
routerProduct.get('/', productController.getAllProducts);

export default routerProduct;