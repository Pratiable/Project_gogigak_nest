import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const now = Date.now();
    const { method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      const delay = Date.now() - now;
      this.logger.log(
        `${method} ${originalUrl}, ${statusCode}, ${contentLength}, ${userAgent}, ${delay}ms`,
      );
    });

    next();
  }
}
