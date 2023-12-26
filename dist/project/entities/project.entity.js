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
exports.Project = void 0;
const swagger_1 = require("@nestjs/swagger");
const company_entity_1 = require("../../company/entities/company.entity");
const team_entity_1 = require("../../team/entities/team.entity");
class Project {
}
exports.Project = Project;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The unique identifier for the project.',
    }),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Project Name',
        description: 'The name of the project.',
    }),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Project description',
        description: 'The description of the project.',
    }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-01-01T00:00:00.000Z',
        description: 'The timestamp when the project was created.',
    }),
    __metadata("design:type", Date)
], Project.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-01-01T00:00:00.000Z',
        description: 'The timestamp when the project was last updated.',
        required: false,
    }),
    __metadata("design:type", Date)
], Project.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the associated company.' }),
    __metadata("design:type", Number)
], Project.prototype, "company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => company_entity_1.Company, description: 'The associated company.' }),
    __metadata("design:type", company_entity_1.Company)
], Project.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [team_entity_1.Team],
        description: 'The teams associated with the project.',
    }),
    __metadata("design:type", Array)
], Project.prototype, "teams", void 0);
//# sourceMappingURL=project.entity.js.map