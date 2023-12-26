import { $Enums, Prisma } from '@prisma/client';
export declare class CreateUserDto implements Prisma.UserCreateInput {
    passwordhash: string;
    roles?: $Enums.Role[];
    created_at?: string | Date;
    updated_at?: string | Date;
    teams?: Prisma.TeamCreateNestedManyWithoutUsersInput;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    birth_date: Date;
    telegram: string;
}
