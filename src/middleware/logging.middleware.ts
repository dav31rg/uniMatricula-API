import { NextFunction, Request, Response } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();
  console.log(`tiempo inicio: ${startTime}`);

  res.on('finish', () => {
    const endTime = Date.now();
    console.log(`tiempo final: ${endTime}`);
    console.log(`Duracion: ${endTime - startTime}`);
  });
  next();
}
