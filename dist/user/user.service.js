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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const auth_bcrypt_1 = require("../auth/utils/auth.bcrypt");
let UserService = class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async user(userWhereUniqueInput) {
        return await this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }
    async users(params) {
        const { skip, take, where, orderBy } = params;
        const result = await this.prisma.$transaction([
            this.prisma.user.findMany({
                skip,
                take,
                where,
                orderBy,
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                    phone: true,
                    birth_date: true,
                    telegram: true,
                    roles: true,
                    created_at: true,
                    updated_at: true,
                    teams: true,
                    company: true,
                    company_id: true,
                },
            }),
            this.prisma.user.count({
                where,
            }),
        ]);
        const [users, count] = result;
        return { users, count };
    }
    async createUser(data) {
        const hash = await (0, auth_bcrypt_1.hashPassword)(data.passwordhash);
        const dataWithHash = { ...data, passwordhash: hash };
        return await this.prisma.user.create({
            data: dataWithHash,
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                phone: true,
                birth_date: true,
                telegram: true,
                roles: true,
                created_at: true,
                updated_at: true,
                teams: {
                    select: {
                        id: true,
                        name: true,
                        created_at: true,
                        updated_at: true,
                        project: true,
                    },
                },
                company: true,
                company_id: true,
            },
        });
    }
    async updateUser(params) {
        const { where, data } = params;
        return await this.prisma.user.update({
            data: data,
            where,
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                phone: true,
                birth_date: true,
                telegram: true,
                roles: true,
                created_at: true,
                updated_at: true,
                teams: {
                    select: {
                        id: true,
                        name: true,
                        created_at: true,
                        updated_at: true,
                        project: true,
                    },
                },
                company: true,
                company_id: true,
            },
        });
    }
    async deleteUser(where) {
        return this.prisma.user.delete({
            where,
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                phone: true,
                birth_date: true,
                telegram: true,
                roles: true,
                created_at: true,
                updated_at: true,
                teams: {
                    select: {
                        id: true,
                        name: true,
                        created_at: true,
                        updated_at: true,
                        project: true,
                    },
                },
                company: true,
                company_id: true,
            },
        });
    }
    async findOne(email) {
        return await this.prisma.user.findFirst({
            where: { email },
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map