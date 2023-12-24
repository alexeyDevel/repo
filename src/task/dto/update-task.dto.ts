import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { $Enums, Prisma } from '@prisma/client';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateTaskDto implements Prisma.TaskUpdateInput {
  @ApiProperty({
    description: 'The title of the task',
    example: 'Updated Task 1',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiProperty({
    description: 'The priority of the task',
    example: 'LOW',
    required: false,
    enum: Object.values($Enums.TaskPriority),
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  priority?: $Enums.TaskPriority;

  @ApiProperty({
    description: 'The status of the task',
    example: 'TODO',
    required: false,
    enum: Object.values($Enums.TaskStatus),
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  status?: $Enums.TaskStatus;

  @ApiProperty({
    description: 'The location of the task',
    example: 'Home Office',
    required: false,
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({
    description: 'The description of the task',
    example: 'Review and finalize the report',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @ApiProperty({
    description: 'The start date of the task',
    example: '2023-11-26T09:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDate()
  date_start?: string | Date;

  @ApiProperty({
    description: 'The end date of the task',
    example: '2023-11-28T17:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDate()
  date_end?: string | Date;

  @ApiProperty({ example: 1, description: 'The ID of the associated team.' })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  team_id: number;

  @ApiProperty({
    description: 'The users assigned to the task',
    type: 'UserUncheckedCreateNestedManyWithoutTasksInput',
    example: {
      connect: [{ id: 1 }, { id: 2 }],
    },
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  users?: Prisma.UserUncheckedCreateNestedManyWithoutTeamsInput;

  @ApiProperty({
    example: 2,
    description: 'The ID of the associated equipment.',
    required: false,
  })
  @IsOptional()
  equipment_id?: number;
}
