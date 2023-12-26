import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { IUserQueryParams } from './interfaces/IUserQueryParams';
import { hashPassword } from 'src/auth/utils/auth.bcrypt';
import { UsersWithCountResponse } from './entities/types';
import { UserQueryParamsDto } from './dto/findQueryParams-user.dto';
import { UserWithoutPasswordHash } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: UserQueryParamsDto): Promise<UsersWithCountResponse> {
    const { skip, take, where, orderBy } = params;
    const result = await this.prisma.$transaction([
      this.prisma.user.findMany({
        skip,
        take,
        where,
        orderBy,
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          phone: true,
          birth_date: true,
          telegram: true,
          roles: true,
          created_at: true,
          updated_at: true,
          teams: true,
          company: true,
          company_id: true,
        },
      }),
      this.prisma.user.count({
        where,
      }),
    ]);
    //   "pagination": {
    //     "page": 1,
    //     "pageSize": 25,
    //     "pageCount": 0,
    //     "total": 0
    // }
    const [users, count] = result;

    return { users, count };
  }

  async createUser(
    data: Prisma.UserCreateInput,
  ): Promise<UserWithoutPasswordHash> {
    const hash = await hashPassword(data.passwordhash);
    const dataWithHash = { ...data, passwordhash: hash };
    return await this.prisma.user.create({
      data: dataWithHash,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone: true,
        birth_date: true,
        telegram: true,
        roles: true,
        created_at: true,
        updated_at: true,
        teams: {
          select: {
            id: true,
            name: true,
            created_at: true,
            updated_at: true,
            project: true,
          },
        },
        company: true,
        company_id: true,
      },
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<UserWithoutPasswordHash> {
    const { where, data } = params;
    return await this.prisma.user.update({
      data: data,
      where,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone: true,
        birth_date: true,
        telegram: true,
        roles: true,
        created_at: true,
        updated_at: true,
        teams: {
          select: {
            id: true,
            name: true,
            created_at: true,
            updated_at: true,
            project: true,
          },
        },
        company: true,
        company_id: true,
      },
    });
  }

  async deleteUser(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<UserWithoutPasswordHash> {
    return this.prisma.user.delete({
      where,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone: true,
        birth_date: true,
        telegram: true,
        roles: true,
        created_at: true,
        updated_at: true,
        teams: {
          select: {
            id: true,
            name: true,
            created_at: true,
            updated_at: true,
            project: true,
          },
        },
        company: true,
        company_id: true,
      },
    });
  }

  async findOne(email: string): Promise<User> {
    return await this.prisma.user.findFirst({
      where: { email },
    });
  }
}
