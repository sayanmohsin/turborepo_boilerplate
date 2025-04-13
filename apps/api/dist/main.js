"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_logger_service_1 = require("./lib/logger/app-logger.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
    });
    const logger = app.get(app_logger_service_1.AppLoggerService);
    const config = app.get((config_1.ConfigService));
    const port = config.get('PORT');
    const env = config.get('NODE_ENV', 'development');
    app.useLogger(logger);
    app.enableCors();
    // Start the server first
    await app.listen(port);
    // Then get the URL
    const url = await app.getUrl();
    logger.log(`URL Shortener API running in ${env} mode`);
    logger.log(`Server running at: ${url}`);
}
bootstrap();
//# sourceMappingURL=main.js.map