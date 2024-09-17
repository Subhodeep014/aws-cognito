import express from 'express'
import { checkUserConfirmationStatus, confirmSignup, refreshAccessToken, resendOTP, signin, signup } from '../controllers/auth.controller.js';
 
const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/confirm-signup', confirmSignup)
router.get('/refresh-token', refreshAccessToken)
router.get('/confirmation-status', checkUserConfirmationStatus)
router.post('/resend-otp', resendOTP)
export default router