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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CompanyService = class CompanyService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCompanyDto) {
        return this.prisma.company.create({
            data: createCompanyDto,
            include: {
                users: {
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
                    },
                },
                projects: true,
            },
        });
    }
    async findAll(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.company.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: {
                users: {
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
                    },
                },
                projects: true,
            },
        });
    }
    async findOne(companyWhereUniqueInput) {
        return this.prisma.company.findUnique({
            where: companyWhereUniqueInput,
            include: {
                users: {
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
                    },
                },
                projects: true,
            },
        });
    }
    async update(params) {
        const { where, data } = params;
        return this.prisma.company.update({
            data,
            where,
            include: {
                users: {
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
                    },
                },
                projects: true,
            },
        });
    }
    async remove(where) {
        return this.prisma.company.delete({
            where,
        });
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompanyService);
//# sourceMappingURL=company.service.js.map