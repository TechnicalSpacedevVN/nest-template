import { NextFunction } from 'express'

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  next()
}
