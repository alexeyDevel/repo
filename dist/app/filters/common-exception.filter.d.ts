import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class CommonExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
