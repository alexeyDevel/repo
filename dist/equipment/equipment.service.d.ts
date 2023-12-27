import { Equipment, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EquipmentQueryParams } from './dto/equipment-query-params.dto';
export declare class EquipmentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createEquipmentDto: Prisma.EquipmentCreateInput): Promise<Equipment>;
    findAll(params: EquipmentQueryParams): Promise<Equipment[]>;
    findOne(EquipmentWhereUniqueInput: Prisma.EquipmentWhereUniqueInput): Promise<Equipment>;
    update(params: {
        where: Prisma.EquipmentWhereUniqueInput;
        data: Prisma.EquipmentUpdateInput;
    }): Promise<{
        tasks: {
            id: number;
            title: string;
            priority: import(".prisma/client").$Enums.TaskPriority;
            status: import(".prisma/client").$Enums.TaskStatus;
            location: string;
            description: string;
            date_start: Date;
            date_end: Date;
            team_id: number;
            equipment_id: number;
        }[];
    } & {
        id: number;
        name: string;
    }>;
    remove(where: Prisma.EquipmentWhereUniqueInput): Promise<Equipment>;
}
