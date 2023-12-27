import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { UsersWithCountResponse } from './entities/types';
import { UserQueryParamsDto } from './dto/findQueryParams-user.dto';
import { UserWithoutPasswordHash } from './entities/user.entity';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null>;
    users(params: UserQueryParamsDto): Promise<UsersWithCountResponse>;
    createUser(data: Prisma.UserCreateInput): Promise<UserWithoutPasswordHash>;
    updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<UserWithoutPasswordHash>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<UserWithoutPasswordHash>;
    findOne(email: string): Promise<User>;
}
