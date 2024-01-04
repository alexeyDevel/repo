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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const company_service_1 = require("./company.service");
const create_company_dto_1 = require("./dto/create-company.dto");
const update_company_dto_1 = require("./dto/update-company.dto");
const role_guard_1 = require("../auth/guards/role.guard");
const cookie_auth_guard_1 = require("../auth/guards/cookie-auth.guard");
const company_query_params_dto_1 = require("./dto/company-query-params.dto");
let CompanyController = class CompanyController {
    companyService;
    constructor(companyService) {
        this.companyService = companyService;
    }
    create(createCompanyDto) {
        return this.companyService.create(createCompanyDto);
    }
    findAll(params) {
        return this.companyService.findAll({
            ...params,
            where: { ...params.where },
        });
    }
    findOne(id) {
        return this.companyService.findOne({ id: Number(id) });
    }
    update(id, updateCompanyDto) {
        return this.companyService.update({
            where: { id: Number(id) },
            data: updateCompanyDto,
        });
    }
    remove(id) {
        return this.companyService.remove({ id: Number(id) });
    }
};
exports.CompanyController = CompanyController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new company' }),
    (0, swagger_1.ApiBody)({ type: create_company_dto_1.CreateCompanyDto }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_dto_1.CreateCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find all companies' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_query_params_dto_1.CompanyQueryParams]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find a company by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the company' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a company by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the company' }),
    (0, swagger_1.ApiBody)({ type: update_company_dto_1.UpdateCompanyDto }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_company_dto_1.UpdateCompanyDto]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a company by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the company' }),
    (0, common_1.UseGuards)(cookie_auth_guard_1.CookieAuthGuard, role_guard_1.RoleGuard),
    (0, role_guard_1.Roles)('USER', 'MODERATOR', 'ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "remove", null);
exports.CompanyController = CompanyController = __decorate([
    (0, swagger_1.ApiTags)('Сompany'),
    (0, common_1.Controller)('company'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
//# sourceMappingURL=company.controller.js.map