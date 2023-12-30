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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamController = void 0;
const common_1 = require("@nestjs/common");
const create_team_dto_1 = require("./dto/create-team.dto");
const team_service_1 = require("./team.service");
const swagger_1 = require("@nestjs/swagger");
const team_entity_1 = require("./entities/team.entity");
const update_team_dto_1 = require("./dto/update-team.dto");
const team_query_params_dto_1 = require("./dto/team-query-params.dto");
const cookie_auth_guard_1 = require("../auth/guards/cookie-auth.guard");
const role_guard_1 = require("../auth/guards/role.guard");
let TeamController = class TeamController {
    teamService;
    constructor(teamService) {
        this.teamService = teamService;
    }
    async createTeam(createTeamDto) {
        return this.teamService.createTeam(createTeamDto);
    }
    async getTeamById(id) {
        return this.teamService.getTeamById({ id: Number(id) });
    }
    async findAll(params) {
        return this.teamService.getAllTeams({
            ...params,
            where: { ...params.where },
        });
    }
    async updateTeam(id, updateTeamDto) {
        return this.teamService.updateTeam({
            where: { id: Number(id) },
            data: updateTeamDto,
        });
    }
    async deleteTeam(id) {
        return this.teamService.deleteTeam({ id: Number(id) });
    }
};
exports.TeamController = TeamController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new team' }),
    (0, swagger_1.ApiBody)({ type: create_team_dto_1.CreateTeamDto, description: 'Data for creating a team' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Team successfully created',
        type: team_entity_1.Team,
    }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "createTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get information about a team by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Team ID', type: 'integer', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful retrieval of team information',
        type: team_entity_1.Team,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Team not found' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getTeamById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a list of all teams' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful retrieval of the list of teams',
        type: team_entity_1.Team,
        isArray: true,
    }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_query_params_dto_1.TeamQueryParams]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update information about a team' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Team ID', type: 'integer', example: 1 }),
    (0, swagger_1.ApiBody)({ type: update_team_dto_1.UpdateTeamDto, description: 'New data for the team' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Team successfully updated',
        type: team_entity_1.Team,
    }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_team_dto_1.UpdateTeamDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "updateTeam", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a team' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Team ID', type: 'integer', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Team successfully deleted',
        type: team_entity_1.Team,
    }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "deleteTeam", null);
exports.TeamController = TeamController = __decorate([
    (0, swagger_1.ApiTags)('Team'),
    (0, common_1.Controller)('team'),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], TeamController);
//# sourceMappingURL=team.controller.js.map