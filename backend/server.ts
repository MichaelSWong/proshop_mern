import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import products from './data/products';
import connectDB from './config/db';
import colors from 'colors';

dotenv.config();

connectDB();

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
    colors.yellow.bold(
      `⚡️[server]: Server is running in ${process.env.NODE_ENV} mode on ${PORT}`
    )
  );
});
