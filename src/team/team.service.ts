import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Prisma, Team } from '@prisma/client';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}
  async createTeam(createTeamDto: Prisma.TeamCreateInput): Promise<Team> {
    return await this.prisma.team.create({
      data: createTeamDto,
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
      },
    });
  }

  async getTeamById(
    teamWhereUniqueInput: Prisma.TeamWhereUniqueInput,
  ): Promise<Team | null> {
    return await this.prisma.team.findUnique({
      where: teamWhereUniqueInput,
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
      },
    });
  }

  async getAllTeams(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TeamWhereUniqueInput;
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithRelationInput;
  }): Promise<Team[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.team.findMany({
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
      },
    });
  }

  async updateTeam(params: {
    where: Prisma.TeamWhereUniqueInput;
    data: Prisma.TeamUpdateInput;
  }): Promise<Team> {
    const { where, data } = params;

    try {
      // Проверяем существование записи
      const team = await this.prisma.team.update({
        where,
        data,
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
        },
      });
      return team;
    } catch (error) {
      if (error.code === 'P2003') {
        throw new NotFoundException('Invalid project_id. Project not found.');
      }
      throw error;
    }
  }

  async deleteTeam(
    teamWhereUniqueInput: Prisma.TeamWhereUniqueInput,
  ): Promise<Team> {
    return this.prisma.team.delete({
      where: teamWhereUniqueInput,
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
      },
    });
  }
}
