import express from 'express';
import orderController from './controllers/order.controller';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);

app.post('/products', productController.createProduct);

app.post('/users', userController.createUser);

app.get('/orders', orderController.getOrders);

export default app;
