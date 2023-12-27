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
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false,
    }));
    app.enableShutdownHooks();
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new nestjs_prisma_1.PrismaClientExceptionFilter(httpAdapter));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Sovtrud API')
        .setDescription('The sovtrud API description')
        .setVersion('1.0')
        .addTag('sovtrud')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map