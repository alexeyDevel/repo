import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let errorMessage = 'Internal Server Error';

    switch (exception.code) {
      case 'P2000': {
        status = HttpStatus.BAD_REQUEST;
        errorMessage = 'Invalid input data';
        break;
      }
      case 'P2001': {
        status = HttpStatus.BAD_REQUEST;
        errorMessage = 'A required field is missing';
        break;
      }
      case 'P2002': {
        status = HttpStatus.CONFLICT;
        errorMessage = 'Duplicate entry';
        break;
      }
      case 'P2003': {
        status = HttpStatus.BAD_REQUEST;
        errorMessage = 'Unique constraint violation';
        break;
      }
      case 'P2004': {
        status = HttpStatus.NOT_FOUND;
        errorMessage = 'Record not found';
        break;
      }
      case 'P2005': {
        status = HttpStatus.BAD_REQUEST;
        errorMessage = 'Invalid relation';
        break;
      }
      case 'P2006': {
        status = HttpStatus.BAD_REQUEST;
        errorMessage = 'Invalid foreign key';
        break;
      }
      case 'P2014': {
        status = HttpStatus.BAD_REQUEST;
        errorMessage = 'Company with the specified company_id does not exist.';
        break;
      }
      default: {
        // Обработка других ошибок Prisma, не являющихся PrismaClientKnownRequestError
        status = HttpStatus.BAD_REQUEST;
        errorMessage = 'Foreign key constraint failed';
        break;
      }
    }

    response.status(status).json({
      statusCode: status,
      message: errorMessage,
    });
  }
}
