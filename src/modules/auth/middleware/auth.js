import jwt from 'jsonwebtoken';
import User from '../../users/models/User.js';
import { AppError } from '../../../common/utils/AppError.js';

export const protect = async (req, res, next) => {
  try {
    let token;

    // Check for token in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw new AppError('Not authorized to access this route', 401);
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      const user = await User.findById(decoded.id).select('-password');
      if (!user) {
        throw new AppError('User not found', 404);
      }

      // Verify role from token matches user's role
      if (decoded.role !== user.role) {
        throw new AppError('Token role mismatch', 401);
      }

      // Add user to request object
      req.user = user;
      next();
    } catch (error) {
      throw new AppError('Not authorized to access this route', 401);
    }
  } catch (error) {
    next(error);
  }
}; 