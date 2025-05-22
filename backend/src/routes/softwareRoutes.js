import express from 'express';
import {
  createSoftware,
  getAllSoftware
} from '../controllers/softwareController.js';

import { authenticate } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', authenticate, authorizeRoles('Admin'), createSoftware);
router.get('/', authenticate, getAllSoftware);

export default router;
