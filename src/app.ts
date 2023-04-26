import express from 'express';
import routerProduct from './routes/products.route';
import routerUser from './routes/users.route';
import routerOrder from './routes/orders.route';

const app = express();

app.use(express.json());
app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);

export default app;
