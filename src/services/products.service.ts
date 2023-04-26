import { Products } from '../interface/Products';
import productModel from '../models/products.model';

const createProduct = async (name: string, amount: string) => {
  const newProduct = await productModel.createProduct(name, amount);

  return newProduct;
};

const findAll = async (): Promise<Products[]> => {
  const allProducts = await productModel.getAllProducts();

  return allProducts;
};

export default {
  createProduct,
  findAll,
};