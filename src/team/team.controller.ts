import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamService } from './team.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Team } from '@prisma/client';
import { Team as TeamEntity } from './entities/team.entity';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamQueryParams } from './dto/team-query-params.dto';
import { CookieAuthGuard } from 'src/auth/guards/cookie-auth.guard';
import { RoleGuard, Roles } from 'src/auth/guards/role.guard';

@ApiTags('Team')
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiOperation({ summary: 'Create a new team' })
  @ApiBody({ type: CreateTeamDto, description: 'Data for creating a team' })
  @ApiResponse({
    status: 201,
    description: 'Team successfully created',
    type: TeamEntity,
  })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Post('create')
  async createTeam(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.createTeam(createTeamDto);
  }

  @ApiOperation({ summary: 'Get information about a team by ID' })
  @ApiParam({ name: 'id', description: 'Team ID', type: 'integer', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Successful retrieval of team information',
    type: TeamEntity,
  })
  @ApiResponse({ status: 404, description: 'Team not found' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Get(':id')
  async getTeamById(@Param('id') id: number): Promise<Team | null> {
    return this.teamService.getTeamById({ id: Number(id) });
  }

  @ApiOperation({ summary: 'Get a list of all teams' })
  @ApiResponse({
    status: 200,
    description: 'Successful retrieval of the list of teams',
    type: TeamEntity,
    isArray: true,
  })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Post()
  async findAll(
    @Body()
    params?: TeamQueryParams,
  ) {
    return this.teamService.getAllTeams({
      ...params,
      where: { ...params.where },
    });
  }

  @ApiOperation({ summary: 'Update information about a team' })
  @ApiParam({ name: 'id', description: 'Team ID', type: 'integer', example: 1 })
  @ApiBody({ type: UpdateTeamDto, description: 'New data for the team' })
  @ApiResponse({
    status: 200,
    description: 'Team successfully updated',
    type: TeamEntity,
  })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Put(':id')
  async updateTeam(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<Team> {
    return this.teamService.updateTeam({
      where: { id: Number(id) },
      data: updateTeamDto,
    });
  }

  @ApiOperation({ summary: 'Delete a team' })
  @ApiParam({ name: 'id', description: 'Team ID', type: 'integer', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Team successfully deleted',
    type: TeamEntity,
  })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Delete(':id')
  async deleteTeam(@Param('id') id: number): Promise<Team> {
    return this.teamService.deleteTeam({ id: Number(id) });
  }
}
