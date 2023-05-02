import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'

// @Injectable()
// export class AddHeaderMiddleware implements NestMiddleware {
//   use(req: any, res: any, next: () => void) {
//     console.log('AddHeaderMiddleware')
//     next()
//   }
// }

export function addheaderMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`AddHeaderMiddleware...`)
  next()
}
