import { Request, Response } from 'express'

export function logger(req: Request, res: Response, next: () => void): void {
  console.log('requested')
  next()
}
