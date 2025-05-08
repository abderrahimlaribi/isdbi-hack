import jwt from 'jsonwebtoken';
import { AppError } from '../../../common/utils/AppError.js';

export const authorize = (...roles) => {
  return (req, res, next) => {
    try {
      // Get token from header
      const token = req.headers.authorization.split(' ')[1];
      
      // Verify token and get role
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      if (!roles.includes(decoded.role)) {
        throw new AppError('Not authorized to access this route', 403);
      }
      
      next();
    } catch (error) {
      next(new AppError('Not authorized to access this route', 403));
    }
  };
}; 