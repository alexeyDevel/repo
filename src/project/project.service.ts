import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Project } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async create(createProjectDto: Prisma.ProjectCreateInput): Promise<Project> {
    return this.prisma.project.create({
      data: createProjectDto,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProjectWhereUniqueInput;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput;
  }): Promise<Project[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.project.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        teams: true,
      },
    });
  }

  async findOne(
    ProjectWhereUniqueInput: Prisma.ProjectWhereUniqueInput,
  ): Promise<Project> {
    return this.prisma.project.findUnique({
      where: ProjectWhereUniqueInput,
      include: {
        teams: true,
      },
    });
  }

  async update(params: {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.ProjectUpdateInput;
  }): Promise<Project> {
    const { where, data } = params;
    return this.prisma.project.update({
      data,
      where,
      include: {
        teams: true,
      },
    });
  }

  async remove(where: Prisma.ProjectWhereUniqueInput): Promise<Project> {
    return this.prisma.project.delete({
      where,
      include: {
        teams: true,
      },
    });
  }
}
