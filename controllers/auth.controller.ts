import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const loginHandler = (req: Request, res: Response) => {
  // ? procesan del cliente el req.body = { email, password }
  // ? validamos el email y el password (zod)
  // ? almacenamos en la bbdd (mongodb)

  // ? generamos un token (jwt)
  const token = jwt.sign({
    test: 'test' // almacenamos la info del usuario en un objeto
  }, 'oursecret', {// (bcrypt) generamos un token con la info del usuario
    expiresIn: 60 * 60 * 24 // 24 horas
  })
  return res.json({ token })
}