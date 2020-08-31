import dotenv from 'dotenv';

/* SET ENVIROMENT AS development by default */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = dotenv.config();

if(config.error) throw new Error('Couldn`t find .env file');

export default {
  server: {
    port: parseInt(process.env.PORT, 10), 
  },
  database: {
    uri: String(process.env.DATABASE_URI),
  }
}