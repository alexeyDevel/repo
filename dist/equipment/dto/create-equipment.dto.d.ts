import { Prisma } from '@prisma/client';
export declare class CreateEquipmentDto implements Prisma.EquipmentCreateInput {
    name: string;
    tasks?: Prisma.TaskCreateNestedManyWithoutEquipmentInput;
}
