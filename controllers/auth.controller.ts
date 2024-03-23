import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const loginHandler = (req: Request, res: Response) => {
  // ? procesan del cliente el req.body = { email, password }
  console.log('the request body is:', req.body)

  // ? validamos el email y el password (zod)
  const credentials = req.body
  // ? almacenamos en la bbdd (mongodb)

  // ? generamos un token (jwt)
  const token = jwt.sign({
    credentials // almacenamos la info del usuario en un objeto
  }, 'oursecret', { // (bcrypt) generamos un token con la info del usuario
    expiresIn: 60 * 60 * 24 // 24 horas
  })

  return res.json({ token })
}

export const profileHandler = (req: Request, res: Response) => {

  return res.json({
    profile: {
      user: req.user // sending the user info to the client
    },
    message: 'profile data'
  })
}