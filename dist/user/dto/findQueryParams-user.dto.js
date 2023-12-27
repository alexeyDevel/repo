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
exports.UserQueryParamsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class UserQueryParamsDto {
}
exports.UserQueryParamsDto = UserQueryParamsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of records to skip for pagination',
        required: false,
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserQueryParamsDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of records to take for pagination',
        required: false,
        example: 10,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserQueryParamsDto.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter conditions for user search',
        required: false,
        example: '{"first_name": "John"}',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UserQueryParamsDto.prototype, "where", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ordering of the result set (e.g., created_at:desc)',
        required: false,
        example: {
            created_at: 'desc',
        },
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UserQueryParamsDto.prototype, "orderBy", void 0);
//# sourceMappingURL=findQueryParams-user.dto.js.map