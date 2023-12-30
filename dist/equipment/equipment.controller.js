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
exports.EquipmentController = void 0;
const common_1 = require("@nestjs/common");
const equipment_service_1 = require("./equipment.service");
const create_equipment_dto_1 = require("./dto/create-equipment.dto");
const update_equipment_dto_1 = require("./dto/update-equipment.dto");
const swagger_1 = require("@nestjs/swagger");
const equipment_query_params_dto_1 = require("./dto/equipment-query-params.dto");
const role_guard_1 = require("../auth/guards/role.guard");
const cookie_auth_guard_1 = require("../auth/guards/cookie-auth.guard");
let EquipmentController = class EquipmentController {
    equipmentService;
    constructor(equipmentService) {
        this.equipmentService = equipmentService;
    }
    create(createEquipmentDto) {
        return this.equipmentService.create(createEquipmentDto);
    }
    findAll(params) {
        return this.equipmentService.findAll(params);
    }
    findOne(id) {
        return this.equipmentService.findOne({ id: Number(id) });
    }
    update(id, updateEquipmentDto, request) {
        return this.equipmentService.update({
            where: { id: Number(id) },
            data: updateEquipmentDto,
        });
    }
    remove(id) {
        return this.equipmentService.remove({ id: Number(id) });
    }
};
exports.EquipmentController = EquipmentController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Equipment' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_equipment_dto_1.CreateEquipmentDto]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all Equipments' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [equipment_query_params_dto_1.EquipmentQueryParams]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a Equipment by ID' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a Equipment by ID' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_equipment_dto_1.UpdateEquipmentDto, Object]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Equipment by ID' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "remove", null);
exports.EquipmentController = EquipmentController = __decorate([
    (0, swagger_1.ApiTags)('Equipment'),
    (0, common_1.Controller)('equipment'),
    __metadata("design:paramtypes", [equipment_service_1.EquipmentService])
], EquipmentController);
//# sourceMappingURL=equipment.controller.js.map