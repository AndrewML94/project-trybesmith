import { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (err: unknown, _req, res, _next) => { 
  if (err instanceof Error && err.message === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  return res.status(500).json({ message: 'Erro inesperado' });
};

export default error;