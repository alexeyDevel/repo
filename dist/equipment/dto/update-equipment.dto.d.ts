import { Prisma } from '@prisma/client';
export declare class UpdateEquipmentDto implements Prisma.EquipmentUpdateInput {
    name: string;
    tasks?: Prisma.TaskCreateNestedManyWithoutEquipmentInput;
}
