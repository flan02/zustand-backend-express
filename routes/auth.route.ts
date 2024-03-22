import express from 'express'
import { loginHandler, profileHandler } from '../controllers/auth.controller'
import { requireAuth } from '../middlewares/requireAuth'
const router = express.Router()
router.post('/login', loginHandler)
router.get('/profile', requireAuth, profileHandler)
export default router