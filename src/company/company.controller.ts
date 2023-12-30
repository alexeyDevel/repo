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
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company, Prisma } from '@prisma/client';
import { RoleGuard, Roles } from '../auth/guards/role.guard';
import { CookieAuthGuard } from '../auth/guards/cookie-auth.guard';
import { CompanyQueryParams } from './dto/company-query-params.dto';

@ApiTags('Сompany')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @ApiOperation({ summary: 'Create a new company' })
  @ApiBody({ type: CreateCompanyDto })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyService.create(createCompanyDto);
  }

  @ApiOperation({ summary: 'Find all companies' })
  @ApiQuery({
    name: 'skip',
    description: 'Number of items to skip for pagination.',
    required: false,
  })
  @ApiQuery({
    name: 'take',
    description: 'Number of items to take for pagination.',
    required: false,
  })
  @ApiQuery({
    name: 'cursor',
    description: 'Unique identifier for cursor-based pagination.',
    required: false,
  })
  @ApiQuery({
    name: 'where',
    description: 'Filter conditions for projects.',
    required: false,
  })
  @ApiQuery({
    name: 'orderBy',
    description: 'Ordering conditions for projects.',
    required: false,
  })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Get()
  findAll(
    @Query()
    params?: CompanyQueryParams,
  ) {
    return this.companyService.findAll({
      ...params,
      where: { ...params.where },
    });
  }

  @ApiOperation({ summary: 'Find a company by ID' })
  @ApiParam({ name: 'id', description: 'ID of the company' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne({ id: Number(id) });
  }

  @ApiOperation({ summary: 'Update a company by ID' })
  @ApiParam({ name: 'id', description: 'ID of the company' })
  @ApiBody({ type: UpdateCompanyDto })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update({
      where: { id: Number(id) },
      data: updateCompanyDto,
    });
  }

  @ApiOperation({ summary: 'Delete a company by ID' })
  @ApiParam({ name: 'id', description: 'ID of the company' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove({ id: Number(id) });
  }
}
