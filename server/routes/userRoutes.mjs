import express from 'express';
import {
  registerUser,
  loginUser,
  getUserById,
  updateUserProfile,
  changePassword,
  forgotPassword,
  resetPassword,
  deleteUserAccount,
  updateUserRole,
} from '../controllers/userController.mjs';

const router = express.Router();

// Existing routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUserById);

// New routes
router.put('/:id/profile', updateUserProfile);          // Update profile
router.put('/:id/change-password', changePassword);     // Change password
router.post('/forgot-password', forgotPassword);        // Forgot password
router.post('/reset-password', resetPassword);          // Reset password
router.delete('/:id', deleteUserAccount);               // Delete account
router.put('/:id/role', updateUserRole);                // Update role (Admin only)

export default router;
