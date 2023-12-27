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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const project_service_1 = require("./project.service");
const create_project_dto_1 = require("./dto/create-project.dto");
const update_project_dto_1 = require("./dto/update-project.dto");
const project_query_params_dto_1 = require("./dto/project-query-params.dto");
const cookie_auth_guard_1 = require("../auth/guards/cookie-auth.guard");
const role_guard_1 = require("../auth/guards/role.guard");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async create(createProjectDto) {
        return await this.projectService.create(createProjectDto);
    }
    async findAll(request, params) {
        return await this.projectService.findAll(Object.assign(Object.assign({}, params), { where: Object.assign(Object.assign({}, params.where), { company_id: request.user.companyId }) }));
    }
    async findOne(id) {
        return await this.projectService.findOne({ id: Number(id) });
    }
    async update(id, updateProjectDto) {
        return await this.projectService.update({
            where: { id: Number(id) },
            data: updateProjectDto,
        });
    }
    async remove(id) {
        return await this.projectService.remove({ id: Number(id) });
    }
};
exports.ProjectController = ProjectController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new project' }),
    (0, swagger_1.ApiBody)({ type: create_project_dto_1.CreateProjectDto }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find all projects' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, project_query_params_dto_1.ProjectQueryParams]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find a project by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Unique identifier for the project.' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a project by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Unique identifier for the project.' }),
    (0, swagger_1.ApiBody)({ type: update_project_dto_1.UpdateProjectDto }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a project by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Unique identifier for the project.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "remove", null);
exports.ProjectController = ProjectController = __decorate([
    (0, swagger_1.ApiTags)('Project'),
    (0, common_1.Controller)('project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
//# sourceMappingURL=project.controller.js.map