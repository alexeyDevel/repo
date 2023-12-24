import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { $Enums, Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto implements Prisma.TaskCreateInput {
  equipment?: Prisma.EquipmentCreateNestedOneWithoutTasksInput;
  @ApiProperty({ description: 'The title of the task', example: 'Task 1' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The priority of the task',
    example: 'LOW',
    enum: Object.values($Enums.TaskPriority),
  })
  @IsString()
  @IsNotEmpty()
  priority: $Enums.TaskPriority;

  @ApiProperty({
    description: 'The status of the task',
    example: 'TODO',
    enum: Object.values($Enums.TaskStatus),
  })
  @IsString()
  @IsNotEmpty()
  status: $Enums.TaskStatus;

  @ApiProperty({ description: 'The location of the task', example: 'Office' })
  location?: string;

  @ApiProperty({
    description: 'The description of the task',
    example: 'Complete the report',
  })
  description?: string;
  date_start: string | Date;
  date_end: string | Date;
  team: Prisma.TeamCreateNestedOneWithoutTasksInput;
  @ApiProperty({ example: 1, description: 'The ID of the associated team.' })
  @IsNotEmpty()
  team_id: number;
  @ApiProperty({
    example: 1,
    description: 'The ID of the associated equipment.',
  })
  @IsNotEmpty()
  equipment_id: number;

  @ApiProperty({
    description: 'The team associated with the task',
    type: 'UserUncheckedCreateNestedManyWithoutTeamsInput',
    example: {
      connect: [{ id: 1 }, { id: 2 }],
    },
  })
  @ApiPropertyOptional()
  users?: Prisma.UserCreateNestedManyWithoutTasksInput;
}
