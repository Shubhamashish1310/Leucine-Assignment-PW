import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';
import config from './ormconfig.js';
import dotenv from 'dotenv';
dotenv.config();

// import routes later here
const app = express();
app.use(express.json());

const AppDataSource = new DataSource(config);

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Database connected');

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error during Data Source initialization', err);
  });
