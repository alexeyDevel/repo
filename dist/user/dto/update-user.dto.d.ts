import { $Enums, Prisma } from '@prisma/client';
export declare class UpdateUserDto implements Prisma.UserUpdateInput {
    passwordhash: string;
    roles?: $Enums.Role[];
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    birth_date?: Date;
    telegram?: string;
    users?: Prisma.UserCreateNestedManyWithoutTeamsInput['connect'];
}
