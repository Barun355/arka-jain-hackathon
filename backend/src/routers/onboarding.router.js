// src/routes/onboardingRoutes.js
import express from 'express';
import { onboardUser } from '../controller/onboarding.controller.js';

const router = express.Router();

/**
 * @route POST /api/onboarding
 * @desc Onboard a user as either mentor or mentee
 * @access Private
 */
router.post('/', onboardUser);

export default router;