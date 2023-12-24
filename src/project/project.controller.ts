// project.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { ProjectService } from './project.service';
import { Prisma, Project } from '@prisma/client';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectQueryParams } from './dto/project-query-params.dto';
import { CookieAuthGuard } from 'src/auth/guards/cookie-auth.guard';
import { RoleGuard, Roles } from 'src/auth/guards/role.guard';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @ApiOperation({ summary: 'Create a new project' })
  @ApiBody({ type: CreateProjectDto })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Post('create')
  async create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return await this.projectService.create(createProjectDto);
  }

  @ApiOperation({ summary: 'Find all projects' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Post()
  async findAll(
    @Req() request,
    @Body()
    params?: ProjectQueryParams,
  ): Promise<Project[]> {
    return await this.projectService.findAll({
      ...params,
      where: { ...params.where, company_id: request.user.companyId },
    });
  }

  @ApiOperation({ summary: 'Find a project by ID' })
  @ApiParam({ name: 'id', description: 'Unique identifier for the project.' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project> {
    return await this.projectService.findOne({ id: Number(id) });
  }

  @ApiOperation({ summary: 'Update a project by ID' })
  @ApiParam({ name: 'id', description: 'Unique identifier for the project.' })
  @ApiBody({ type: UpdateProjectDto })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    return await this.projectService.update({
      where: { id: Number(id) },
      data: updateProjectDto,
    });
  }

  @ApiOperation({ summary: 'Delete a project by ID' })
  @ApiParam({ name: 'id', description: 'Unique identifier for the project.' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Project> {
    return await this.projectService.remove({ id: Number(id) });
  }
}
