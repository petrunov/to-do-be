import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception instanceof BadRequestException && exception.getResponse()) {
      const responseObj = exception.getResponse() as any;
      if (responseObj.message && Array.isArray(responseObj.message)) {
        const messages = responseObj.message.map((msg: any) => {
          if (typeof msg === 'string') {
            return msg;
          } else if (typeof msg === 'object' && msg.constraints) {
            return Object.values(msg.constraints).join(', ');
          }
          return msg;
        });
        response.status(status).json({
          statusCode: status,
          message: messages.join(', '),
        });
      } else {
        response.status(status).json(responseObj);
      }
    } else {
      response.status(status).json({
        statusCode: status,
        message: exception.message,
      });
    }
  }
}
