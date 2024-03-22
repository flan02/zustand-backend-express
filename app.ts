import express from 'express'
import authRoutes from './routes/auth.route'

const app = express()
app.use(authRoutes)

export default app