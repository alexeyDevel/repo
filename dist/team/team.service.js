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
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TeamService = class TeamService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTeam(createTeamDto) {
        return await this.prisma.team.create({
            data: createTeamDto,
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
            },
        });
    }
    async getTeamById(teamWhereUniqueInput) {
        return await this.prisma.team.findUnique({
            where: teamWhereUniqueInput,
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
            },
        });
    }
    async getAllTeams(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.team.findMany({
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
            },
        });
    }
    async updateTeam(params) {
        const { where, data } = params;
        try {
            const team = await this.prisma.team.update({
                where,
                data,
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
                },
            });
            return team;
        }
        catch (error) {
            if (error.code === 'P2003') {
                throw new common_1.NotFoundException('Invalid project_id. Project not found.');
            }
            throw error;
        }
    }
    async deleteTeam(teamWhereUniqueInput) {
        return this.prisma.team.delete({
            where: teamWhereUniqueInput,
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
            },
        });
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeamService);
//# sourceMappingURL=team.service.js.map