import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Equipment } from '@prisma/client';
import { EquipmentQueryParams } from './dto/equipment-query-params.dto';
import { RoleGuard, Roles } from '../auth/guards/role.guard';
import { CookieAuthGuard } from '../auth/guards/cookie-auth.guard';

@ApiTags('Equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @ApiOperation({ summary: 'Create a new Equipment' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Post('create')
  create(@Body() createEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
    return this.equipmentService.create(createEquipmentDto);
  }

  @ApiOperation({ summary: 'Get all Equipments' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Post()
  findAll(
    @Body()
    params?: EquipmentQueryParams,
  ): Promise<Equipment[]> {
    return this.equipmentService.findAll(params);
  }

  @ApiOperation({ summary: 'Get a Equipment by ID' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Equipment> {
    return this.equipmentService.findOne({ id: Number(id) });
  }

  @ApiOperation({ summary: 'Update a Equipment by ID' })
  @UseGuards(CookieAuthGuard, RoleGuard)
  @Roles('USER', 'MODERATOR', 'ADMIN')
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
    @Req() request,
  ): Promise<Equipment> {
    return this.equipmentService.update({
      where: { id: Number(id) },
      data: updateEquipmentDto,
    });
  }

  @ApiOperation({ summary: 'Delete a Equipment by ID' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Equipment> {
    return this.equipmentService.remove({ id: Number(id) });
  }
}
