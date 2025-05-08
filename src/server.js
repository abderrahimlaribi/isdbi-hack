import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './common/config/config.js';
import { connectDB } from './common/config/db.js';
import { errorHandler } from './common/middleware/errorHandler.js';
import { notFoundHandler } from './common/middleware/notFoundHandler.js';
import authRoutes from './modules/auth/routes/index.js';
import userRoutes from './modules/users/routes/index.js';

// Debug environment variables
console.log('Configuration:');
console.log('PORT:', config.port);
console.log('MONGODB_URI:', config.mongoUri);
console.log('JWT_SECRET:', config.jwtSecret ? 'Set' : 'Not Set');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
