"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const swagger_1 = require("@nestjs/swagger");
const nestjs_prisma_1 = require("nestjs-prisma");
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = require("path");
const fs_1 = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false,
    }));
    app.enableShutdownHooks();
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new nestjs_prisma_1.PrismaClientExceptionFilter(httpAdapter));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Sovtrud API')
        .setDescription('The sovtrud API description')
        .setVersion('1.0')
        .addTag('sovtrud')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/swagger', app, document);
    await app.listen(process.env.PORT || 3000);
    if (process.env.NODE_ENV === 'development') {
        const pathToSwaggerStaticFolder = (0, path_1.resolve)(process.cwd(), 'swagger-static');
        const pathToSwaggerJson = (0, path_1.resolve)(pathToSwaggerStaticFolder, 'swagger.json');
        const swaggerJson = JSON.stringify(document, null, 2);
        (0, fs_1.writeFileSync)(pathToSwaggerJson, swaggerJson);
        console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map