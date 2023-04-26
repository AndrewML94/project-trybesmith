import jwt from 'jsonwebtoken';

const jwtSecret = 'a senha mais secreta do mundo todo, não, do universo';
const jwtConfig: object = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const genToken = (payload: object) => {
  const token = jwt.sign(payload, jwtSecret, jwtConfig);
  return token;
};

export default {
  genToken,
};