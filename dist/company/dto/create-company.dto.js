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
exports.CreateCompanyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCompanyDto {
    name;
    address;
    description;
}
exports.CreateCompanyDto = CreateCompanyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Company Name',
        description: 'The name of the company.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Company Address',
        description: 'The address of the company.',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Company Description',
        description: 'The description of the company.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "description", void 0);
//# sourceMappingURL=create-company.dto.js.map