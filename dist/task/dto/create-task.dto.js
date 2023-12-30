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
exports.CreateTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class CreateTaskDto {
    equipment;
    title;
    priority;
    status;
    location;
    description;
    date_start;
    date_end;
    team;
    team_id;
    equipment_id;
    users;
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The title of the task', example: 'Task 1' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The priority of the task',
        example: 'LOW',
        enum: Object.values(client_1.$Enums.TaskPriority),
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The status of the task',
        example: 'TODO',
        enum: Object.values(client_1.$Enums.TaskStatus),
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The location of the task', example: 'Office' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the task',
        example: 'Complete the report',
    }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the associated team.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTaskDto.prototype, "team_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the associated equipment.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTaskDto.prototype, "equipment_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The team associated with the task',
        type: 'UserUncheckedCreateNestedManyWithoutTeamsInput',
        example: {
            connect: [{ id: 1 }, { id: 2 }],
        },
    }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], CreateTaskDto.prototype, "users", void 0);
//# sourceMappingURL=create-task.dto.js.map