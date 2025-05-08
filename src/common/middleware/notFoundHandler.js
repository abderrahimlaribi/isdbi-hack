import { AppError } from '../utils/AppError.js';

export const notFoundHandler = (req, res, next) => {
  next(new AppError(`Not Found - ${req.originalUrl}`, 404));
}; 