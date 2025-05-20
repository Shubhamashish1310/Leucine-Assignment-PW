import dotenv from 'dotenv';
dotenv.config();

export default {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/entities/**/*.js'],
  synchronize: true, 
  logging: false,
};
