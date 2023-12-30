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
exports.CreateTeamDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateTeamDto {
    project;
    created_at;
    updated_at;
    users;
    name;
    team_lead;
    description;
    project_id;
}
exports.CreateTeamDto = CreateTeamDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Users associated with the team.',
        type: 'UserUncheckedCreateNestedManyWithoutTeamsInput',
        example: {
            connect: [{ id: 1 }, { id: 2 }],
        },
    }),
    __metadata("design:type", Object)
], CreateTeamDto.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Example Team Name',
        description: 'Name of the team',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', description: 'Team lead of the team' }),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "team_lead", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Team description',
        description: 'Description of the team',
    }),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the associated project.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTeamDto.prototype, "project_id", void 0);
//# sourceMappingURL=create-team.dto.js.map