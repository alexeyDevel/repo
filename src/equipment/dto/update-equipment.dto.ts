import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateEquipmentDto } from './create-equipment.dto';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEquipmentDto implements Prisma.EquipmentUpdateInput {
  @ApiProperty({
    description: 'The title of the equipment',
    example: 'EquipmentName',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The team associated with the equipment',
    type: 'TaskCreateNestedManyWithoutEquipmentInput',
    example: {
      connect: [{ id: 1 }, { id: 2 }],
    },
  })
  @ApiPropertyOptional()
  tasks?: Prisma.TaskCreateNestedManyWithoutEquipmentInput;
}
