import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@turborepo-boilerplate/db';
import { AppLoggerService } from '../../lib/logger/app-logger.service';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private configService;
    private logger;
    constructor(configService: ConfigService, logger: AppLoggerService);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    createClientWithUrl(): Promise<PrismaClient>;
}
