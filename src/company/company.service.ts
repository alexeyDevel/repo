import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(createCompanyDto: Prisma.CompanyCreateInput) {
    return this.prisma.company.create({
      data: createCompanyDto,
      include: {
        users: {
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
          },
        },
        projects: true,
      }
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CompanyWhereUniqueInput;
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithRelationInput;
  }): Promise<Company[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.company.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        users: {
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
          },
        },
        projects: true,
      }
    });
  }

  async findOne(
    companyWhereUniqueInput: Prisma.CompanyWhereUniqueInput,
  ): Promise<Company> {
    return this.prisma.company.findUnique({
      where: companyWhereUniqueInput,
      include: {
        users: {
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
          },
        },
        projects: true,
      }
    });
  }

  async update(params: {
    where: Prisma.CompanyWhereUniqueInput;
    data: Prisma.CompanyUpdateInput;
  }): Promise<Company> {
    const { where, data } = params;
    return this.prisma.company.update({
      data,
      where,
      include: {
        users: {
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
          },
        },
        projects: true,
      }
    });
  }

  async remove(where: Prisma.CompanyWhereUniqueInput): Promise<Company> {
    return this.prisma.company.delete({
      where,
    });
  }
}
