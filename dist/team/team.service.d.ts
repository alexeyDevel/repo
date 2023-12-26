import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Team } from '@prisma/client';
export declare class TeamService {
    private prisma;
    constructor(prisma: PrismaService);
    createTeam(createTeamDto: Prisma.TeamCreateInput): Promise<Team>;
    getTeamById(teamWhereUniqueInput: Prisma.TeamWhereUniqueInput): Promise<Team | null>;
    getAllTeams(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TeamWhereUniqueInput;
        where?: Prisma.TeamWhereInput;
        orderBy?: Prisma.TeamOrderByWithRelationInput;
    }): Promise<Team[]>;
    updateTeam(params: {
        where: Prisma.TeamWhereUniqueInput;
        data: Prisma.TeamUpdateInput;
    }): Promise<Team>;
    deleteTeam(teamWhereUniqueInput: Prisma.TeamWhereUniqueInput): Promise<Team>;
}
