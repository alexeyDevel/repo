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
exports.UpdateEquipmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class UpdateEquipmentDto {
    name;
    tasks;
}
exports.UpdateEquipmentDto = UpdateEquipmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The title of the equipment',
        example: 'EquipmentName',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateEquipmentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The team associated with the equipment',
        type: 'TaskCreateNestedManyWithoutEquipmentInput',
        example: {
            connect: [{ id: 1 }, { id: 2 }],
        },
    }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], UpdateEquipmentDto.prototype, "tasks", void 0);
//# sourceMappingURL=update-equipment.dto.js.map