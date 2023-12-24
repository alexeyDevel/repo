// common-exception.filter.ts
import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof Error
        ? HttpStatus.INTERNAL_SERVER_ERROR
        : exception.getStatus();

    let errorMessage = 'Internal Server Error';

    // Если у исключения есть message, отправляем его пользователю
    if (exception.message) {
      errorMessage = exception.message;
    }

    response.status(status).json({
      statusCode: status,
      message: errorMessage,
    });
  }
}
