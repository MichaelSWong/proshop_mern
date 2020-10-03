import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import productRoutes from './routes/productRoutes';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use('/api/products', productRoutes);

app.use(notFound, errorHandler);

app.listen(PORT, () => {
  console.log(
    colors.yellow.bold(
      `⚡️[server]: Server is running in ${process.env.NODE_ENV} mode on ${PORT}`
    )
  );
});
