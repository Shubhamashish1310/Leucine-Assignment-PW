import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
import { AppDataSource } from './src/config/db.js';
import softwareRoutes from './src/routes/softwareRoutes.js';

import requestRoutes from './src/routes/requestRoutes.js';


dotenv.config();

// import routes later here
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/software', softwareRoutes);
app.use('/api/requests', requestRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});



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
