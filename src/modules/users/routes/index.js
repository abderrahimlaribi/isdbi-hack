import express from 'express';
import { protect } from '../../auth/middleware/auth.js';
import { authorize } from '../../auth/middleware/authorize.js';
import {
  getCurrentUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUserRole
} from '../controllers/userController.js';

const router = express.Router();

// Protected routes (require authentication)
router.get('/me', protect, getCurrentUser);
router.put('/me', protect, updateUser);
router.delete('/me', protect, deleteUser);

// Admin routes
router.get('/', protect, authorize('admin'), getAllUsers);
router.get('/:id', protect, authorize('admin'), getUserById);
router.put('/:id/role', protect, authorize('admin'), updateUserRole);

export default router; 