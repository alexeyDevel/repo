"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("../prisma/prisma.service");
const user_module_1 = require("../user/user.module");
const auth_module_1 = require("../auth/auth.module");
const team_module_1 = require("../team/team.module");
const core_1 = require("@nestjs/core");
const nestjs_prisma_1 = require("nestjs-prisma");
const jwt_1 = require("@nestjs/jwt");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'swagger-static'),
                serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            team_module_1.TeamModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_KEY,
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            prisma_service_1.PrismaService,
            {
                provide: core_1.APP_FILTER,
                useFactory: ({ httpAdapter }) => {
                    return new nestjs_prisma_1.PrismaClientExceptionFilter(httpAdapter, {
                        P2000: common_1.HttpStatus.BAD_REQUEST,
                        P2002: common_1.HttpStatus.CONFLICT,
                        P2025: common_1.HttpStatus.NOT_FOUND,
                    });
                },
                inject: [core_1.HttpAdapterHost],
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map