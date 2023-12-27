import { IUserQueryParams } from '../interfaces/IUserQueryParams';
import { Prisma } from '@prisma/client';
export declare class UserQueryParamsDto implements IUserQueryParams {
    skip?: number;
    take?: number;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
}
