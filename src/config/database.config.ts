import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'word_pair_db',
  dialect: 'mysql',
  logging: process.env.NODE_ENV === 'development',
  autoLoadModels: true,
  synchronize: false,
}));
