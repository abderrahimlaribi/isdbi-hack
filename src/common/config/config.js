import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env vars with explicit path
dotenv.config({ path: join(__dirname, '../../../.env') });

// Default JWT secret for development
const DEFAULT_JWT_SECRET = 'hackathon_super_secret_key_2024_development';

const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hack-backend',
  jwtSecret: process.env.JWT_SECRET || DEFAULT_JWT_SECRET
};

// Validate required config
if (!config.mongoUri) {
  throw new Error('MONGODB_URI is required in environment variables');
}

// Ensure JWT secret is set
if (!config.jwtSecret) {
  console.warn('Warning: Using default JWT secret. This is not recommended for production.');
  config.jwtSecret = DEFAULT_JWT_SECRET;
}

export default config; 