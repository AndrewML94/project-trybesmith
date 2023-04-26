import express from 'express';
import routerProduct from './routes/products.route';
import routerUser from './routes/users.route';
import routerOrder from './routes/orders.route';
import 'express-async-errors';
import routerLogin from './routes/login.route';
import error from './middleware/errors.middleware';

const app = express();

app.use(express.json());
app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);
app.use('/login', routerLogin);
app.use(error);

export default app;
