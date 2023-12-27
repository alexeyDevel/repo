import { Prisma } from '@prisma/client';
export declare class EquipmentQueryParams {
    skip?: number;
    take?: number;
    cursor?: Prisma.EquipmentWhereUniqueInput;
    where?: Prisma.EquipmentWhereInput;
    orderBy?: Prisma.EquipmentOrderByWithRelationInput;
}
