"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLoggerService = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
let AppLoggerService = class AppLoggerService {
    logger = (0, winston_1.createLogger)({
        level: process.env.NODE_ENV === 'production' ? 'warn' : 'verbose',
        format: winston_1.format.combine(winston_1.format.colorize({ all: true }), winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message, context }) => {
            const contextStr = typeof context === 'string' ? context : 'Application';
            return `${timestamp} [${contextStr}] ${level}: ${message}`;
        })),
        transports: [new winston_1.transports.Console()],
    });
    log(message, context) {
        this.logger.info(message, { context });
    }
    error(message, trace, context) {
        this.logger.error(message, { trace, context });
    }
    warn(message, context) {
        this.logger.warn(message, { context });
    }
    debug(message, context) {
        this.logger.debug(message, { context });
    }
    verbose(message, context) {
        this.logger.verbose(message, { context });
    }
};
exports.AppLoggerService = AppLoggerService;
exports.AppLoggerService = AppLoggerService = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Injectable)()
], AppLoggerService);
//# sourceMappingURL=app-logger.service.js.map