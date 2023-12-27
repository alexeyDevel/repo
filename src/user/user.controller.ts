import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashPassword } from 'src/auth/utils/auth.bcrypt';
import {
  ApiBody,
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import {
  User as UserEntitiy,
  UserWithoutPasswordHash,
} from './entities/user.entity';
import { UserQueryParamsDto } from './dto/findQueryParams-user.dto';
import { UsersWithCountResponse } from './entities/types';
import { CookieAuthGuard } from 'src/auth/guards/cookie-auth.guard';
import { RoleGuard, Roles } from 'src/auth/guards/role.guard';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBody({
    type: UserQueryParamsDto,
    description: 'User query parameters',
  })
  @ApiOperation({ summary: 'Find all users' })
  @ApiResponse({
    status: 200,
    description: 'Returns the list of all users',
    type: UserEntitiy,
    isArray: true,
  })
  @Post('all')
  async findAll(
    @Body() query: UserQueryParamsDto,
    @Req() request,
  ): Promise<UsersWithCountResponse> {
    return this.userService.users({
      ...query,
      where: { ...query.where, company_id: request.currentUser.company_id },
    });
  }

  @ApiOperation({ summary: 'Find one user by ID' })
  @ApiParam({ name: 'id', description: 'User ID', type: 'integer' })
  @ApiResponse({
    status: 200,
    description: 'Returns the found user',
    type: UserEntitiy,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() request): Promise<User | null> {
    return this.userService.user({ id: parseInt(id) });
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: UserEntitiy,
  })
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserWithoutPasswordHash> {
    const hash = await hashPassword(createUserDto.password);
    delete createUserDto.password;
    return this.userService.createUser({
      ...createUserDto,
      passwordhash: hash,
    });
  }

  @ApiOperation({ summary: 'Update user by ID' })
  @ApiParam({ name: 'id', description: 'User ID', type: 'integer' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
    type: UserEntitiy,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserWithoutPasswordHash> {
    const userUpdateData = {
      where: { id: parseInt(id) },
      data: updateUserDto,
    };
    return this.userService.updateUser(userUpdateData);
  }

  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiParam({ name: 'id', description: 'User ID', type: 'integer' })
  @ApiResponse({
    status: 200,
    description: 'User deleted successfully',
    type: UserEntitiy,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<UserWithoutPasswordHash> {
    const userWhereUniqueInput = { id: parseInt(id) };
    return this.userService.deleteUser(userWhereUniqueInput);
  }
}
