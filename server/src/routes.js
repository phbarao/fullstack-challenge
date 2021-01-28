import { Router } from 'express';
const routes = Router();

import ProductController from './controllers/ProductController.js';

routes.get('/', (req, res) => {
  try {
    res.json({ message: 'OK' });
  } catch (error) {
    console.error(error);
  }
});

// PRODUCTS
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);
routes.put('/products/', ProductController.update);
routes.delete('/products/:_id', ProductController.delete);

export default routes;
