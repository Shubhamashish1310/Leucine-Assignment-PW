import express from 'express';
import {
  createRequest,
  getPendingRequests,
  updateRequestStatus,
} from '../controllers/requestController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', authenticate, authorizeRoles('Employee'), createRequest);

router.get('/', authenticate, authorizeRoles('Manager'), getPendingRequests);

router.patch('/:id', authenticate, authorizeRoles('Manager'), updateRequestStatus);

export default router;
