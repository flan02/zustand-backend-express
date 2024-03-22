import express from 'express'
import authRouter from './routes/auth.route'

const app = express()
app.use(authRouter)

export default app