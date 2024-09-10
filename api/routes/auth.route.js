import express from 'express'
import { confirmSignup, refreshAccessToken, signin, signup } from '../controllers/auth.controller.js';
 
const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/confirm-signup', confirmSignup)
router.get('/refresh-token', refreshAccessToken)

export default router