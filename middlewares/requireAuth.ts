import express from 'express';
import jwt from 'jsonwebtoken';

export const requireAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization
  console.log(authHeader);
  if (!authHeader) return res.status(401).json({ message: 'Unauthorized. Token required' })
  authHeader.split(' ')
  const token = authHeader.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Unauthorized. Token required' })
  jwt.verify(token, 'oursecret', (err, payload) => {
    if (err) return res.status(401).json({ message: 'Unauthorized. Invalid token' })
    console.log(payload); // * { test: 'test', iat: 1711142450, exp: 1711228850 }
    req.user = payload // user property added to req object using types.d.ts
    next()

    //! Para que esto funcione primero tenemos que hacer un login y obtener un token (POST)
    //! Luego con el token obtenido hacemos un GET a /profile
  })
}