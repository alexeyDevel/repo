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
exports.EquipmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EquipmentService = class EquipmentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createEquipmentDto) {
        return this.prisma.equipment.create({
            data: createEquipmentDto,
        });
    }
    async findAll(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.equipment.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: {
                tasks: true,
            },
        });
    }
    async findOne(EquipmentWhereUniqueInput) {
        return this.prisma.equipment.findUnique({
            where: EquipmentWhereUniqueInput,
            include: {
                tasks: true,
            },
        });
    }
    async update(params) {
        const { where, data } = params;
        console.log(data);
        return this.prisma.equipment.update({
            data,
            where,
            include: {
                tasks: true,
            },
        });
    }
    async remove(where) {
        return this.prisma.equipment.delete({
            where,
            include: {
                tasks: true,
            },
        });
    }
};
exports.EquipmentService = EquipmentService;
exports.EquipmentService = EquipmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EquipmentService);
//# sourceMappingURL=equipment.service.js.map