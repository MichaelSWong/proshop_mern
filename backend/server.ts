import express, { Request, Response, NextFunction } from 'express';
import OS from 'os';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

colors.enable();
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 5000;
const hostName = OS.hostname();

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound, errorHandler);

app.listen(PORT, () => {
  console.log(
    `⚡️[server]: Server is running in ${process.env.NODE_ENV} mode on ${PORT}, on host ${hostName}`
      .yellow.bold
  );
});
