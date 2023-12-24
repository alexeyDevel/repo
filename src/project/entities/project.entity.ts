import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Company } from 'src/company/entities/company.entity';
import { Team } from 'src/team/entities/team.entity';

export class Project {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier for the project.',
  })
  id: number;

  @ApiProperty({
    example: 'Project Name',
    description: 'The name of the project.',
  })
  name: string;

  @ApiProperty({
    example: 'Project description',
    description: 'The description of the project.',
  })
  description: string;

  @ApiProperty({
    example: '2023-01-01T00:00:00.000Z',
    description: 'The timestamp when the project was created.',
  })
  created_at: Date;

  @ApiProperty({
    example: '2023-01-01T00:00:00.000Z',
    description: 'The timestamp when the project was last updated.',
    required: false,
  })
  updated_at?: Date;

  @ApiProperty({ example: 1, description: 'The ID of the associated company.' })
  company_id: number;

  @ApiProperty({ type: () => Company, description: 'The associated company.' })
  company: Company;

  @ApiProperty({
    type: () => [Team],
    description: 'The teams associated with the project.',
  })
  teams: Team[];
}
