import { CreateTeamDto } from './dto/create-team.dto';
import { TeamService } from './team.service';
import { Team } from '@prisma/client';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamQueryParams } from './dto/team-query-params.dto';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    createTeam(createTeamDto: CreateTeamDto): Promise<Team>;
    getTeamById(id: number): Promise<Team | null>;
    findAll(params?: TeamQueryParams): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        team_lead: string;
        description: string;
        project_id: number;
    }[]>;
    updateTeam(id: string, updateTeamDto: UpdateTeamDto): Promise<Team>;
    deleteTeam(id: number): Promise<Team>;
}
