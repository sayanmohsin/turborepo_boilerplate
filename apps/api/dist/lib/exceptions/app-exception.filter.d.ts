import { type ArgumentsHost, type ExceptionFilter } from '@nestjs/common';
import { AppLoggerService } from '../logger/app-logger.service';
export declare class AppExceptionFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: AppLoggerService);
    catch(exception: unknown, host: ArgumentsHost): void;
    private getErrorMessage;
}
