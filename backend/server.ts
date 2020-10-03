import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import products from './data/products';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/api/products/:id', (req: Request, res: Response) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(
    `⚡️[server]: Server is running in ${process.env.NODE_ENV} mode on ${PORT}`
  );
});
