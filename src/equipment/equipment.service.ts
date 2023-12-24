import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EquipmentQueryParams } from './dto/equipment-query-params.dto';

@Injectable()
export class EquipmentService {
  constructor(private prisma: PrismaService) {}
  async create(
    createEquipmentDto: Prisma.EquipmentCreateInput,
  ): Promise<Equipment> {
    return this.prisma.equipment.create({
      data: createEquipmentDto,
    });
  }

  async findAll(params: EquipmentQueryParams): Promise<Equipment[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.equipment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        tasks: true,
      },
    });
  }

  async findOne(
    EquipmentWhereUniqueInput: Prisma.EquipmentWhereUniqueInput,
  ): Promise<Equipment> {
    return this.prisma.equipment.findUnique({
      where: EquipmentWhereUniqueInput,
      include: {
        tasks: true,
      },
    });
  }

  async update(params: {
    where: Prisma.EquipmentWhereUniqueInput;
    data: Prisma.EquipmentUpdateInput;
  }) {
    const { where, data } = params;
    console.log(data);
    return this.prisma.equipment.update({
      data,
      where,
      include: {
        tasks: true,
      },
    });
  }

  async remove(where: Prisma.EquipmentWhereUniqueInput): Promise<Equipment> {
    return this.prisma.equipment.delete({
      where,
      include: {
        tasks: true,
      },
    });
  }
}
