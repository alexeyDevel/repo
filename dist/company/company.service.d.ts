import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Company } from './entities/company.entity';
export declare class CompanyService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCompanyDto: Prisma.CompanyCreateInput): Promise<{
        users: {
            id: number;
            email: string;
            phone: string;
            first_name: string;
            last_name: string;
            birth_date: Date;
            telegram: string;
            roles: import(".prisma/client").$Enums.Role[];
            created_at: Date;
            updated_at: Date;
        }[];
        projects: {
            id: number;
            name: string;
            description: string;
            created_at: Date;
            updated_at: Date;
            company_id: number;
        }[];
    } & {
        id: number;
        name: string;
        address: string;
        description: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CompanyWhereUniqueInput;
        where?: Prisma.CompanyWhereInput;
        orderBy?: Prisma.CompanyOrderByWithRelationInput;
    }): Promise<Company[]>;
    findOne(companyWhereUniqueInput: Prisma.CompanyWhereUniqueInput): Promise<Company>;
    update(params: {
        where: Prisma.CompanyWhereUniqueInput;
        data: Prisma.CompanyUpdateInput;
    }): Promise<Company>;
    remove(where: Prisma.CompanyWhereUniqueInput): Promise<Company>;
}
