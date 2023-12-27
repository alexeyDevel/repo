import { UserService } from './user.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserWithoutPasswordHash } from './entities/user.entity';
import { UserQueryParamsDto } from './dto/findQueryParams-user.dto';
import { UsersWithCountResponse } from './entities/types';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(query: UserQueryParamsDto, request: any): Promise<UsersWithCountResponse>;
    findOne(id: string, request: any): Promise<User | null>;
    create(createUserDto: CreateUserDto): Promise<UserWithoutPasswordHash>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserWithoutPasswordHash>;
    remove(id: string): Promise<UserWithoutPasswordHash>;
}
