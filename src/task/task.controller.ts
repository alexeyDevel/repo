import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Prisma, Task } from '@prisma/client';
import { TaskQueryParams } from './dto/task-query-params.dto';
import { CookieAuthGuard } from '../auth/guards/cookie-auth.guard';
import { RoleGuard, Roles } from '../auth/guards/role.guard';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Create a new task' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Post()
  async findAll(
    @Req() request,
    @Body()
    params?: TaskQueryParams,
  ): Promise<Task[]> {
    return this.taskService.findAll({
      ...params,
      where: { ...params.where, users: { some: { id: request.user.id } } },
    });
  }

  @ApiOperation({ summary: 'Get a task by ID' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOne({ id: Number(id) });
  }

  @ApiOperation({ summary: 'Update a task by ID' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.update({
      where: { id: Number(id) },
      data: updateTaskDto,
    });
  }

  @ApiOperation({ summary: 'Delete a task by ID' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Task> {
    return this.taskService.remove({ id: Number(id) });
  }
}
