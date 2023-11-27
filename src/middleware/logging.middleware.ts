import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';

export function logger(req: Request, res: Response, next: NextFunction) {
  if (process.env.LOGGER_ENABLED === 'true') {
    const startTime = Date.now();

    res.on('finish', () => {
      const endTime = Date.now();
      const logTime = `Request:${req.method}, endpoint:${req.path}, Duration:${
        endTime - startTime
      }\n`;
      fs.appendFile('log.csv', logTime, (err) => {
        if (err) throw err;
      });
    });
  }
  next();
}
