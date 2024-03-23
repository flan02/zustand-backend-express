import express from 'express'
import { loginHandler, profileHandler } from '../controllers/auth.controller'
import { requireAuth } from '../middlewares/requireAuth'
import bodyParser from 'body-parser'

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router()
router.post('/login', urlencodedParser, jsonParser, loginHandler)
router.get('/profile', requireAuth, profileHandler)
export default router