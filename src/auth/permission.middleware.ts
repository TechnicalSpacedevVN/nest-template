import { NextFunction } from 'express'

export function permissionMiddleware(req: Request, res: Response, next: NextFunction) {
  next()
}
