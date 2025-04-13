"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const db_1 = require("@turborepo-boilerplate/db");
const app_logger_service_1 = require("../../lib/logger/app-logger.service");
let PrismaService = class PrismaService extends db_1.PrismaClient {
    configService;
    logger;
    constructor(configService, logger) {
        super({
            datasources: {
                db: {
                    url: configService.get('DATABASE_URL'),
                },
            },
        });
        this.configService = configService;
        this.logger = logger;
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async createClientWithUrl() {
        const databaseUrl = this.configService.get('DATABASE_URL');
        if (!databaseUrl) {
            throw new Error('DATABASE_URL is not defined in environment variables');
        }
        const prismaClient = new db_1.PrismaClient({
            datasources: {
                db: {
                    url: databaseUrl,
                },
            },
        });
        try {
            await prismaClient.$connect();
            return prismaClient;
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.error('Failed to connect to the database:', error.message);
            }
            else {
                this.logger.error('Failed to connect to the database:', String(error));
            }
            throw new Error('Failed to connect to the database');
        }
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        app_logger_service_1.AppLoggerService])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map