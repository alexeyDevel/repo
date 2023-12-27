import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Project } from '@prisma/client';
export declare class ProjectService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProjectDto: Prisma.ProjectCreateInput): Promise<Project>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProjectWhereUniqueInput;
        where?: Prisma.ProjectWhereInput;
        orderBy?: Prisma.ProjectOrderByWithRelationInput;
    }): Promise<Project[]>;
    findOne(ProjectWhereUniqueInput: Prisma.ProjectWhereUniqueInput): Promise<Project>;
    update(params: {
        where: Prisma.ProjectWhereUniqueInput;
        data: Prisma.ProjectUpdateInput;
    }): Promise<Project>;
    remove(where: Prisma.ProjectWhereUniqueInput): Promise<Project>;
}
