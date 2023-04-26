import { Request, Response } from 'express';
import productsService from '../services/products.service';

const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;

  const newProduct = await productsService.createProduct(name, amount);

  return res.status(201).json(newProduct);
};

const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productsService.findAll();

  return res.status(200).json(allProducts);
};

export default {
  createProduct,
  getAllProducts,
};