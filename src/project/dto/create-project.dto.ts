import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProjectDto implements Prisma.ProjectCreateInput {
  company: Prisma.CompanyCreateNestedOneWithoutProjectsInput;
  teams?: Prisma.TeamCreateNestedManyWithoutProjectInput;

  @ApiProperty({
    example: 'Project Name',
    description: 'The name of the project.',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1, description: 'The ID of the associated company.' })
  @IsNotEmpty()
  company_id?: number;

  @ApiProperty({ example: 'The description.', description: 'The description.' })
  description?: string;
}
