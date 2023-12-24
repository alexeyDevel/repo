import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEquipmentDto implements Prisma.EquipmentCreateInput {
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
