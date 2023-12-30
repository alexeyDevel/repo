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
exports.CookieAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let CookieAuthGuard = class CookieAuthGuard {
    jwtService;
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.cookies.access_token;
        if (token) {
            try {
                const decodedToken = this.jwtService.verify(token);
                const now = Math.floor(Date.now() / 1000);
                if (decodedToken.exp && decodedToken.exp < now) {
                    return false;
                }
                request.currentUser = decodedToken;
                return true;
            }
            catch (error) {
                return false;
            }
        }
        return false;
    }
};
exports.CookieAuthGuard = CookieAuthGuard;
exports.CookieAuthGuard = CookieAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], CookieAuthGuard);
//# sourceMappingURL=cookie-auth.guard.js.map