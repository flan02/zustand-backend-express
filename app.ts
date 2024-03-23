import express from 'express'
import authRouter from './routes/auth.route'
import cors from 'cors'

const app = express()
app.use(cors({
  origin: 'http://localhost:5173', // * for all
  credentials: true
}))
app.use(authRouter)

export default app