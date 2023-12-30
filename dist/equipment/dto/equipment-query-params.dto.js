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
exports.EquipmentQueryParams = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class EquipmentQueryParams {
    skip;
    take;
    cursor;
    where;
    orderBy;
}
exports.EquipmentQueryParams = EquipmentQueryParams;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'skip',
        description: 'Number of items to skip for pagination.',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EquipmentQueryParams.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'take',
        description: 'Number of items to take for pagination.',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EquipmentQueryParams.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'cursor',
        description: 'Unique identifier for cursor-based pagination.',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], EquipmentQueryParams.prototype, "cursor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'where',
        description: 'Filter conditions for equipment.',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], EquipmentQueryParams.prototype, "where", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ordering of the result set (e.g., created_at:desc)',
        required: false,
        example: {
            name: 'desc',
        },
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], EquipmentQueryParams.prototype, "orderBy", void 0);
//# sourceMappingURL=equipment-query-params.dto.js.map