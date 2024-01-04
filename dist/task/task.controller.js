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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const task_service_1 = require("./task.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
const task_query_params_dto_1 = require("./dto/task-query-params.dto");
const cookie_auth_guard_1 = require("../auth/guards/cookie-auth.guard");
const role_guard_1 = require("../auth/guards/role.guard");
let TaskController = class TaskController {
    taskService;
    constructor(taskService) {
        this.taskService = taskService;
    }
    async create(createTaskDto) {
        return await this.taskService.create(createTaskDto);
    }
    async findAll(request, params) {
        return await this.taskService.findAll({
            ...params,
            where: { ...params.where, users: { some: { id: request.user.id } } },
        });
    }
    async findOne(id) {
        return await this.taskService.findOne({ id: Number(id) });
    }
    async update(id, updateTaskDto) {
        return await this.taskService.update({
            where: { id: Number(id) },
            data: updateTaskDto,
        });
    }
    async remove(id) {
        return await this.taskService.remove({ id: Number(id) });
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new task' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all tasks' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_query_params_dto_1.TaskQueryParams]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a task by ID' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a task by ID' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a task by ID' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "remove", null);
exports.TaskController = TaskController = __decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map